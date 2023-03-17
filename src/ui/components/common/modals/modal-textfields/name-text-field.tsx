import { TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import { FC } from 'react';
import { editUser } from '../../../../../types/admin/edit-user';

type Props = {
	name?: string;
	handleChange: (e: React.ChangeEvent<any>) => void;
	errors: FormikErrors<editUser>;
	touched: FormikTouched<editUser>;
};
export const NameTextField: FC<Props> = ({
	name,
	handleChange,
	errors,
	touched,
}) => {
	return (
		<TextField
			fullWidth
			id='name'
			label='name'
			name='name'
			autoComplete='name'
			autoFocus
			value={name}
			onChange={handleChange}
			error={touched.name && Boolean(errors.name)}
			helperText={touched.name && errors.name}
		/>
	);
};
