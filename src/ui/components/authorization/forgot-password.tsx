import { Box, Button, CssBaseline, Grid, Link, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Routes } from '../../../constants/routes/routes';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import { useFormik } from 'formik';
import { InitialFormValue } from '../../../types/formik/formik-sign-in';
import * as Yup from 'yup';

const theme = createTheme();

const initialValues: Pick<InitialFormValue, 'email'> = {
	email: '',
};

export const ForgotPassword = () => {
	const formik = useFormik({
		initialValues,
		onSubmit: (data) => {
			const { email } = data;
			try {
				const response = 'waiting for endpoint'; /////waiting for endpoint to reset password
			} catch (error) {
				console.log(JSON.stringify(error, null, 2));
			}
			console.log(email);
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.email('Must be a valid email')
				.max(50)
				.required('Email is required'),
		}),
	});

	const { errors, touched, values, handleChange, handleSubmit } = formik;
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container component='main' maxWidth='xs'>
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockResetOutlinedIcon />
					</Avatar>
					<Typography component='h2' variant='h5'>
						Reset password
					</Typography>
					<Box
						sx={{
							width: '100%',
						}}>
						<Box
							component='form'
							noValidate
							sx={{ mt: 2 }}
							onSubmit={handleSubmit}>
							<TextField
								fullWidth
								required
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								autoFocus
								value={values.email}
								onChange={handleChange}
								helperText={touched.email && errors.email}
								error={touched.email && Boolean(errors.email)}
							/>
							<Box textAlign='center' sx={{ mt: 2 }}>
								<Button variant='contained' type='submit'>
									Reset Password
								</Button>
							</Box>
						</Box>
						<Grid container justifyContent='flex-end'>
							<Grid item>
								<Link
									component={RouterLink}
									to={`/${Routes.SIGN_IN}`}
									variant='body2'>
									Back to Sign In
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};
