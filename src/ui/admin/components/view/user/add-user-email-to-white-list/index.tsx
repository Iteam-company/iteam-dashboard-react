import { useFormik } from 'formik';
import { useNotifySnackbar } from '../../../../../../hooks/snackbar/use-notify-snackbar';
import { Input } from '../../../../../components/common/input';
import { Error as ApiError } from '../../../../../../types/common/api/error';
import * as Yup from 'yup';
import { useAddEmailToWhiteListMutation } from '../../../../../../api/email';
import { Box } from '@mui/material';
import { Flexbox } from '../../../../../components/common/flex-box';
import { CardWrapper } from '../user-summary/user-card-wrapper';
import LoadingButton from '@mui/lab/LoadingButton';

const initialValues = {
	email: '',
};

export const AddEmailToWhiteList = () => {
	const title = 'add user to white list';
	const [addEmail, { isLoading }] = useAddEmailToWhiteListMutation();
	const { showSnackbar } = useNotifySnackbar();
	const formik = useFormik({
		initialValues,
		onSubmit: async (data) => {
			const { email } = data;
			try {
				const response = await addEmail({ email }).unwrap();
				showSnackbar('successfully changed ', 'success');
				formik.resetForm();
			} catch (error) {
				const typedError = error as ApiError;
				showSnackbar(typedError.data.message, 'error');
			}
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.email('Must be a valid email')
				.max(30)
				.required('Email is required'),
		}),
	});

	const { handleSubmit } = formik;
	return (
		<CardWrapper param={false} title={title}>
			<Flexbox
				justifyContent={'center'}
				alignItems={'center'}
				sx={{ flexDirection: 'column', gap: '10px' }}>
				<Box
					component='form'
					noValidate
					onSubmit={handleSubmit}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '10px',
						width: '400px',
					}}>
					<Input
						name='email'
						formik={formik}
						label='Email'
						formikValue={'email'}
					/>
					<LoadingButton
						variant='contained'
						color='primary'
						type='submit'
						loading={isLoading}>
						add email
					</LoadingButton>
				</Box>
			</Flexbox>
		</CardWrapper>
	);
};
