import { Box, FormControl, Modal } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FC } from 'react';
import { Error as ApiError } from '../../../../../types/common/api/error';
import { useNotifySnackbar } from '../../../../../hooks/snackbar/use-notify-snackbar';
import { useSignUpMutation } from '../../../../../api/auth';
import { CloseButton } from '../modal-buttons/close';
import { AddButton } from '../modal-buttons/add';
import { EmailTextField } from '../modal-textfields/email-text-field';
import { PasswordTextField } from '../modal-textfields/password-text-field';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 14,
	p: 4,
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
	outline: 'none',
};

type Props = {
	open: boolean;
	handleOpen?: () => void;
	handleClose: () => void;
};

const initialValues = {
	email: '',
	password: '',
};

export const AddUserModal: FC<Props> = ({ open, handleClose }) => {
	const [signUp] = useSignUpMutation();
	const { showSnackbar } = useNotifySnackbar();

	const formik = useFormik({
		initialValues,
		onSubmit: async (data) => {
			const { email, password } = data;
			try {
				const response = await signUp({ email, password }).unwrap();
				showSnackbar('successfully created', 'success');
				handleClose();
			} catch (error) {
				const typedError = error as ApiError;
				showSnackbar(typedError.data.message, 'error');
			}
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.email('Must be a valid email')
				.max(50)
				.required('Email is required'),
			password: Yup.string().min(8).max(16).required('Password is required'),
		}),
		validateOnBlur: false,
	});

	const { errors, touched, values, handleChange, handleSubmit } = formik;

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<form onSubmit={handleSubmit}>
					<FormControl sx={style}>
						<Box>
							<EmailTextField
								email={values.email}
								handleChange={handleChange}
								touched={touched}
								errors={errors}
							/>
						</Box>
						<Box>
							<PasswordTextField
								values={values}
								handleChange={handleChange}
								touched={touched}
								errors={errors}
							/>
						</Box>
						<Box sx={{ textAlign: 'center' }}>
							<Box sx={{ display: 'inline-block', mr: 2 }}>
								<AddButton text='Add User' />
							</Box>
							<CloseButton handleClose={handleClose} />
						</Box>
					</FormControl>
				</form>
			</Modal>
		</>
	);
};
