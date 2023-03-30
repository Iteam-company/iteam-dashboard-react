import { TextField } from '@mui/material';
import { FC, InputHTMLAttributes, memo, PropsWithChildren } from 'react';

interface InputProps extends PropsWithChildren {
	type?: InputHTMLAttributes<unknown>['type'];
	name: string;
	formik: any;
	label?: string;
}

export const Input: FC<InputProps> = memo((props) => {
	const { type = 'text', name, formik, label } = props;
	const { errors, touched, values, handleChange } = formik;

	if (formik) {
		return (
			<TextField
				required
				fullWidth
				id={name}
				label={label}
				name={name}
				autoComplete={name}
				value={values[name]}
				onChange={handleChange}
				helperText={touched[name] && errors[name]}
				error={touched[name] && Boolean(errors[name])}
			/>
		);
	}

	return <TextField fullWidth name={name} label={name} type={type} id={name} />;
});

Input.displayName = 'Input';
