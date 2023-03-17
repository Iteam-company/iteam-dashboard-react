import { TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import { FC } from 'react';
import { AuthCredentials } from '../../../../../types/common/client/auth-credentials';

type Props = {
	values?: AuthCredentials;
	handleChange: (e: React.ChangeEvent<any>) => void;
	errors: FormikErrors<AuthCredentials>;
	touched: FormikTouched<AuthCredentials>;
};
export const PasswordTextField: FC<Props> = ({
	values,
	handleChange,
	touched,
	errors,
}) => {
	return (
		<TextField
			id='password'
			label='Password'
			variant='outlined'
			type='password'
			fullWidth
			value={values?.password}
			onChange={handleChange}
			helperText={touched.password && errors.password}
			error={touched.password && Boolean(errors.password)}
			required
		/>
	);
};
