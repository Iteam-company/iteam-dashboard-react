//import { Box, FormControl, Modal } from '@mui/material';
//import { FC } from 'react';
//import { useAddEmailToWhiteListMutation } from '../../../../../api/email';
//import { useNotifySnackbar } from '../../../../../hooks/snackbar/use-notify-snackbar';
//import { Error as ApiError } from '../../../../../types/common/api/error';
//import * as Yup from 'yup';
//import { useFormik } from 'formik';
//import { style } from '../../../../../styles/modal-style';
//import CloseIcon from '@mui/icons-material/Close';
//import { Input } from '../../input';
//type Props = {
//	open: boolean;
//	handleOpen?: () => void;
//	handleClose: () => void;
//};

//const initialValues = {
//	email: '',
//};

//export const AddEmailInWhiteListModal: FC<Props> = ({ open, handleClose }) => {
//	const [addEmail, { isLoading }] = useAddEmailToWhiteListMutation();
//	const { showSnackbar } = useNotifySnackbar();
//	const formik = useFormik({
//		initialValues,
//		onSubmit: async (data, { resetForm }) => {
//			const { email } = data;
//			try {
//				const response = await addEmail({ email }).unwrap();
//				showSnackbar('successfully added', 'success');
//				resetForm({ values: { email: '' } });
//				handleClose();
//			} catch (error) {
//				const typedError = error as ApiError;
//				showSnackbar(typedError.data.message, 'error');
//			}
//		},
//		validationSchema: Yup.object().shape({
//			email: Yup.string()
//				.email('Must be a valid email')
//				.max(50)
//				.required('Email is required'),
//		}),
//		validateOnBlur: false,
//	});

//	const { handleSubmit } = formik;

//	return (
//		<Modal
//			open={open}
//			onClose={handleClose}
//			aria-labelledby='modal-modal-title'
//			aria-describedby='modal-modal-description'>
//			<form onSubmit={handleSubmit}>
//				<FormControl sx={style}>
//					<Box>
//						<Input formik={formik} label='Email' name='email' />
//					</Box>
//					<Box sx={{ textAlign: 'center' }}>
//						<Box sx={{ display: 'inline-block', mr: 2, height: '39px' }}>
//							<ModalButton text='Add Email' loading={isLoading} />
//						</Box>
//						<ModalButton
//							text='Close'
//							handleClick={handleClose}
//							icon={<CloseIcon />}
//						/>
//					</Box>
//				</FormControl>
//			</form>
//		</Modal>
//	);
//};
