import { memo } from 'react';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSignUpMutation } from '../../../api/auth';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { CommontRoutes } from '../../../constants/common/routes/common-routes';
import { Input } from '../../components/common/input';
import { Button } from '@mui/material';
import { useNotifySnackbar } from '../../../hooks/snackbar/use-notify-snackbar';

const initialValues = {
	email: '',
	password: '',
};

export const SignUp = memo(() => {
	const navigate = useNavigate();
	const { showSnackbar } = useNotifySnackbar();
	const [
		registration /*{ isLoading: isSignUpLoading, isError: isSignUpError }*/,
	] = useSignUpMutation();
	const formik = useFormik({
		initialValues,
		onSubmit: async (data) => {
			const { email, password } = data;
			try {
				const response = await registration({
					email,
					password,
				}).unwrap();
				showSnackbar('success', 'success');
			} catch (error) {
				alert(JSON.stringify(data, null, 2));
			}
		},
		validationSchema: Yup.object().shape({
			password: Yup.string().min(8).max(20).required('Password is required'),
			email: Yup.string()
				.required('Email is required')
				.email('Must be a valid email')
				.min(8)
				.max(50),
		}),
		validateOnBlur: false,
	});

	const { handleSubmit } = formik;

	return (
		<Container component='main' maxWidth='xs' sx={{ marginTop: 8 }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '10px',
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
					sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}></Grid>
						<Grid item xs={12}>
							<Input
								type='email'
								name='email'
								formik={formik}
								label='Email Address'
							/>
						</Grid>
						<Grid item xs={12}>
							<Input
								type='password'
								name='password'
								label='Password'
								formik={formik}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value='allowExtraEmails' color='primary' />}
								label='I want to receive inspiration, marketing promotions and updates via email.'
							/>
						</Grid>
					</Grid>

					<Button fullWidth variant='contained' type='submit'>
						Sign Up
					</Button>

					<Grid container justifyContent='flex-end'>
						<Grid item>
							<Link
								component={RouterLink}
								to={`/${CommontRoutes.SIGN_IN}`}
								variant='body2'>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
});

SignUp.displayName = 'SignUp';
