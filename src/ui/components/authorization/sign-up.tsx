import * as React from 'react';
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
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { initialSignUpValue } from '../../../types/formik/formik-sign-up';
import { useRegistrationMutation } from '../../../api/auth';
import { Link as RouterLink } from 'react-router-dom';
import { Routes } from '../../../constants/routes/routes';

const theme = createTheme();

const initialValues: initialSignUpValue = {
	email: '',
	password: '',
	name: '',
	surname: '',
};

export const SignUp = () => {
	const dispatch = useDispatch();

	const [registration, { isLoading: isSignUpLoading, isError: isSignUpError }] =
		useRegistrationMutation();
	const formik = useFormik({
		initialValues,
		onSubmit: async (data: initialSignUpValue) => {
			const { name, surname, email, password } = data;
			try {
				const response = await registration({
					name,
					surname,
					email,
					password,
				}).unwrap();
			} catch (error) {
				console.log(JSON.stringify(data, null, 2));
			}
		},
		validationSchema: Yup.object().shape({
			name: Yup.string()
				.min(2, 'Too Short!')
				.max(50, 'Too Long!')
				.required('Required'),
			surname: Yup.string()
				.min(2, 'Too Short!')
				.max(50, 'Too Long!')
				.required('Required'),
			password: Yup.string().min(8).max(20).required('Password is required'),
			email: Yup.string()
				.required('Email is required')
				.email('Must be a valid email')
				.min(8)
				.max(50),
		}),
		validateOnBlur: false,
	});

	const {
		errors,
		touched,
		values,
		handleChange,
		handleSubmit,
	} = formik;

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
						Sign up
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete='given-name'
									id='name'
									name='name'
									label='First Name'
									required
									fullWidth
									autoFocus
									value={values.name}
									onChange={handleChange}
									helperText={touched.name && errors.name}
									error={touched.name && Boolean(errors.name)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='surname'
									label='Last Name'
									name='surname'
									autoComplete='family-name'
									value={values.surname}
									onChange={handleChange}
									helperText={touched.surname && errors.surname}
									error={touched.surname && Boolean(errors.surname)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
									value={values.email}
									onChange={handleChange}
									helperText={touched.email && errors.email}
									error={touched.email && Boolean(errors.email)}
									
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='new-password'
									value={values.password}
									onChange={handleChange}
									helperText={touched.password && errors.password}
									error={touched.password && Boolean(errors.password)}
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox value='allowExtraEmails' color='primary' />
									}
									label='I want to receive inspiration, marketing promotions and updates via email.'
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}>
							Sign Up
						</Button>
						<Grid container justifyContent='flex-end'>
							<Grid item>
								<Link
									component={RouterLink}
									to={`/${Routes.SIGN_IN}`}
									variant='body2'>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
};
