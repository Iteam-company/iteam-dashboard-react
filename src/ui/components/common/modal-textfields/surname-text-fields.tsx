import { TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import { FC } from 'react';
import { editUser } from '../../../../types/admin/edit-user';

type Props = {
	surname?: string;
	handleChange: (e: React.ChangeEvent<any>) => void;
	errors: FormikErrors<editUser>;
	touched: FormikTouched<editUser>;
};
export const SurnameTextField: FC<Props> = ({
	surname,
	handleChange,
	errors,
	touched,
}) => {
	return (
		<TextField
			fullWidth
			id='surname'
			label='surname'
			name='surname'
			autoComplete='surname'
			autoFocus
			value={surname}
			onChange={handleChange}
			error={touched.surname && Boolean(errors.surname)}
			helperText={touched.surname && errors.surname}
		/>
	);
};
