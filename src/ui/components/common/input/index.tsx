import { TextField } from '@mui/material';
import {
	FC,
	InputHTMLAttributes,
	memo,
	PropsWithChildren,
} from 'react';

interface InputProps extends PropsWithChildren {
	type?: InputHTMLAttributes<unknown>['type'];
	name: string;
	formik?: any;
	label?: string;
	formikValue?: string;
}

export const Input: FC<InputProps> = memo((props) => {
	const { type = 'text', name, formik, label, formikValue } = props;

	if (formik && formikValue) {
		const { errors, touched, values, handleChange } = formik;

		return (
			<TextField
				required
				fullWidth
				id={name}
				label={label}
				name={formikValue}
				autoComplete={name}
				value={values[formikValue]}
				onChange={handleChange}
				helperText={touched[formikValue] && errors[formikValue]}
				error={touched[formikValue] && Boolean(errors[formikValue])}
			/>
		);
	}

	return <TextField fullWidth name={name} label={name} type={type} id={name} />;
});

Input.displayName = 'Input';
