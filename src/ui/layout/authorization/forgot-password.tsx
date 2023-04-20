import { Box, Button, Grid, Link } from '@mui/material';
import { memo } from 'react';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Error as ApiError } from '../../../types/common/api/error';
import { CommontRoutes } from '../../../constants/common/routes/common-routes';
import { useNotifySnackbar } from '../../../hooks/snackbar/use-notify-snackbar';
import { Input } from '../../components/common/input';

const initialValues = {
	email: '',
};

export const ForgotPassword = memo(() => {
	const { showSnackbar } = useNotifySnackbar();
	const formik = useFormik({
		initialValues,
		onSubmit: (data) => {
			const { email } = data;
			try {
				// const response = 'waiting for endpoint'; /////waiting for endpoint to reset password
				showSnackbar('successfully changed ', 'success');
			} catch (error) {
				const typedError = error as ApiError;
				showSnackbar(typedError.data.message, 'error');
			}
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.email('Must be a valid email')
				.max(20)
				.required('Email is required'),
		}),
	});

	const { handleSubmit } = formik; // was: {errors, touched, values, handleChange}
	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '10px',
				}}>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockResetOutlinedIcon />
				</Avatar>
				<Typography component='h2' variant='h5'>
					Reset password
				</Typography>

				<Box
					component='form'
					noValidate
					onSubmit={handleSubmit}
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '10px',
					}}>
					<Input name='email' formik={formik} label='Email' formikValue={'email'}/>

					<Button type='submit' variant='contained' sx={{ maxWidth: '200px' }}>
						Reset Password
					</Button>
				</Box>
				<Grid container justifyContent='flex-end'>
					<Grid item>
						<Link
							component={RouterLink}
							to={`${CommontRoutes.ROOT_PATH}${CommontRoutes.SIGN_IN}`}
							variant='body2'>
							Back to Sign In
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
});

ForgotPassword.displayName = 'ForgotPassword';
