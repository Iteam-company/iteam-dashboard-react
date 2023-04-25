import { TextField } from '@mui/material';
import { FC, InputHTMLAttributes, memo, PropsWithChildren } from 'react';

interface InputProps extends PropsWithChildren {
	type?: InputHTMLAttributes<unknown>['type'];
	name?: string;
	formik?: any;
	label?: string;
	formikValue?: string;
	value?: string;
	handleChange?: (...args: any) => void;
}

export const Input: FC<InputProps> = memo((props) => {
	const {
		type = 'text',
		name,
		formik,
		label,
		formikValue,
		value,
		handleChange,
	} = props;

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

	return (
		<TextField
			fullWidth
			name={name}
			label={name}
			type={type}
			id={name}
			value={value}
			onChange={handleChange}
		/>
	);
});

Input.displayName = 'Input';
