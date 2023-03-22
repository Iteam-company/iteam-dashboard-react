import { TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import { FC } from 'react';
import { AuthCredentials } from '../../../../types/common/client/auth-credentials';

type Props = {
	email?: string;
	handleChange: (e: React.ChangeEvent<any>) => void;
	errors: FormikErrors<AuthCredentials>;
	touched: FormikTouched<AuthCredentials>;
};

export const EmailTextField: FC<Props> = ({
	email,
	handleChange,
	errors,
	touched,
}) => {
	return (
		<TextField
			required
			fullWidth
			id='email'
			label='Email Address'
			name='email'
			autoComplete='email'
			autoFocus
			value={email}
			onChange={handleChange}
			error={touched.email && Boolean(errors.email)}
			helperText={touched.email && errors.email}
		/>
	);
};
