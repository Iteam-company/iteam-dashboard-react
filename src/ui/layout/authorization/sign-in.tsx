import { memo } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import * as Yup from 'yup';
import { useSignInMutation } from '../../../api/auth';
import { useAppDispatch } from '../../../hooks/store/use-app-dispatch-hook';
import { useFormik } from 'formik';
import { setCredentials } from '../../../store/slices/auth-slice';
import { Link as RouterLink } from 'react-router-dom';
import { Error as ApiError } from '../../../types/common/api/error';
import { useNotifySnackbar } from '../../../hooks/snackbar/use-notify-snackbar';
import { CommontRoutes } from '../../../constants/common/routes/common-routes';

const initialValues = {
	email: 'example@gmail.com',
	password: 'some hashed data',
};

export const SignIn = memo(() => {
	const dispatch = useAppDispatch();
	const { showSnackbar } = useNotifySnackbar();
	const [signIn /*{ isLoading: isLoginLoading, isError: isLoginError }*/] =
		useSignInMutation();

	const formik = useFormik({
		initialValues,
		onSubmit: async (data) => {
			const { email, password } = data;
			try {
				const response = await signIn({ email, password }).unwrap();
				dispatch(setCredentials(response));
				showSnackbar('successfully signed in', 'success');
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
		<Container component='main' maxWidth='xs' sx={{ marginTop: 8 }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '10px',
				}}>
				<Avatar sx={{ bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<Box
					component='form'
					onSubmit={handleSubmit}
					noValidate
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '15px',
						width: '100%',
					}}>
					<TextField
						error={touched.email && Boolean(errors.email)}
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
						value={values.email}
						onChange={handleChange}
						helperText={touched.email && errors.email}
					/>

					<TextField
						error={touched.email && Boolean(errors.password)}
						helperText={touched.password && errors.password}
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						value={values.password}
						onChange={handleChange}
					/>
					<FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label='Remember me'
					/>

					<Button fullWidth variant='contained' type='submit'>
						Sign In
					</Button>

					<Grid container>
						<Grid item xs>
							<Link
								component={RouterLink}
								to={`${CommontRoutes.ROOT_PATH}${CommontRoutes.FORGOT_PASSWORD}`}
								variant='body2'>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link
								component={RouterLink}
								to={`${CommontRoutes.ROOT_PATH}${CommontRoutes.SIGN_UP}`}
								variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
});

SignIn.displayName = 'SignIn';
