import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Copyright } from '../reusable/copyright';
import { useLoginMutation } from '../../../api/auth';
import { useAppDispatch } from '../../../hooks/store/use-app-dispatch-hook';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setAccesToken } from '../../../store/slices/auth-slice';
import { InitialFormValue } from '../../../types/formik/formik-sign-in';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Routes } from '../../../constants/routes/routes';

const theme = createTheme();

const initialValues: InitialFormValue = {
	email: '',
	password: '',
};

export function SignIn() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [login, { isLoading: isLoginLoading, isError: isLoginError }] =
		useLoginMutation();

	const formik = useFormik({
		initialValues,
		onSubmit: async (data) => {
			const { email, password } = data;
			try {
				const response = await login({ email, password }).unwrap();
				dispatch(setAccesToken(response.token));
				console.log(response);
				if (response) {
					return navigate('/');
				}
			} catch (error) {
				console.log(JSON.stringify(error, null, 2));
			}
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.email('Must be a valid email')
				.max(50)
				.required('Email is required'),
			password: Yup.string().min(8).max(20).required('Password is required'),
		}),
		validateOnBlur: false,
	});

	const { errors, touched, values, handleChange, handleSubmit } = formik;

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<Box
						component='form'
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}>
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
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link
									component={RouterLink}
									to={`/${Routes.SIGN_UP}`}
									variant='body2'>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
}
