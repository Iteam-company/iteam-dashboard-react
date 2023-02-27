import { FC } from 'react';
import { Grid, TextField, Typography } from '@mui/material';

type Props = {
	title?: string;
	subtitle?: string;
};

export const UserSettingsTextField: FC<Props> = ({ title, subtitle }) => {
	return (
		<>
			<Grid item xs={4}>
				<Typography>{title}</Typography>
			</Grid>
			<Grid item xs={8}>
				<TextField
					fullWidth
					size='small'
					margin='normal'
					label={title}
					required
				/>
				<Typography sx={{ fontSize: '10px' }}>{subtitle}</Typography>
			</Grid>
		</>
	);
};
