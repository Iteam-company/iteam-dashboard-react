import { Box, Button, FormControl, Modal, TextField } from '@mui/material';
import { FC } from 'react';
import { useAddEmailToWhiteListMutation } from '../../../../api/email';
import { useNotifySnackbar } from '../../../../hooks/snackbar/use-notify-snackbar';
import { Error as ApiError } from '../../../../types/common/api/error';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 14,
	p: 4,
	pb: 2,
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
};

export const AddEmailInWhiteListModal: FC<Props> = ({ open, handleClose }) => {
	const [addEmail] = useAddEmailToWhiteListMutation();
	const { showSnackbar } = useNotifySnackbar();
	const formik = useFormik({
		initialValues,
		onSubmit: async (data) => {
			const { email } = data;
			try {
				const response = await addEmail({ email }).unwrap();
				showSnackbar('successfully added', 'success');
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
		}),
		validateOnBlur: false,
	});

	const { errors, touched, values, handleChange, handleSubmit } = formik;
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'>
			<form onSubmit={handleSubmit}>
				<FormControl sx={style}>
					<Box>
						<TextField
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							value={values.email}
							onChange={handleChange}
							error={touched.email && Boolean(errors.email)}
							helperText={touched.email && errors.email}
						/>
					</Box>
					<Box sx={{ textAlign: 'center' }}>
						<Button variant='contained' color='primary' type='submit'>
							Add Email
						</Button>
					</Box>
				</FormControl>
			</form>
		</Modal>
	);
};
