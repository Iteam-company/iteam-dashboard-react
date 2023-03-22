import { Box, FormControl, Modal } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FC } from 'react';
import { Error as ApiError } from '../../../../../types/common/api/error';
import { useNotifySnackbar } from '../../../../../hooks/snackbar/use-notify-snackbar';
import { useSignUpMutation } from '../../../../../api/auth';
import { ModalButton } from '../../buttons/modals-button';
import { EmailTextField } from '../../modal-textfields/email-text-field';
import { PasswordTextField } from '../../modal-textfields/password-text-field';
import { style } from '../../../../../styles/modal-style';
import CloseIcon from '@mui/icons-material/Close';

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
	const [create, { isLoading }] = useSignUpMutation();
	const { showSnackbar } = useNotifySnackbar();

	const formik = useFormik({
		initialValues,
		onSubmit: async (data) => {
			const { email, password } = data;
			try {
				const response = await create({ email, password }).unwrap();
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
								<ModalButton text='Add User' loading={isLoading} />
							</Box>
							<ModalButton
								text='Close'
								handleClick={handleClose}
								icon={<CloseIcon />}
							/>
						</Box>
					</FormControl>
				</form>
			</Modal>
		</>
	);
};
