import { useFormik } from 'formik';
import { useCreateUserMutation } from '../../../../../../api/user';
import { useNotifySnackbar } from '../../../../../../hooks/snackbar/use-notify-snackbar';
import * as Yup from 'yup';
import { Error as ApiError } from '../../../../../../types/common/api/error';
import { CardWrapper } from '../user-summary/user-card-wrapper';
import { Flexbox } from '../../../../../components/common/flex-box';
import { Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Input } from '../../../../../components/common/input';
import { useSignUpMutation } from '../../../../../../api/auth';

const initialValues = {
	email: '',
	password: '',
};

export const AddUser = () => {
	const [createUser, { isLoading }] = useSignUpMutation();
	const title = 'Add new user';
	const { showSnackbar } = useNotifySnackbar();
	const formik = useFormik({
		initialValues,
		onSubmit: async (data) => {
			const { email, password } = data;
			try {
				const response = await createUser({ email, password }).unwrap();
				showSnackbar('successfully created ', 'success');
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
			password: Yup.string().min(8).max(16).required('Password is required'),
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
					<Input
						name='password'
						formik={formik}
						label='Password'
						formikValue={'password'}
					/>

					<LoadingButton
						variant='contained'
						color='primary'
						type='submit'
						loading={isLoading}>
						add user
					</LoadingButton>
				</Box>
			</Flexbox>
		</CardWrapper>
	);
};
