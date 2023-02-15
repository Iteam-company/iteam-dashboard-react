import { FC } from 'react';
import { Grid, InputAdornment, TextField, Typography } from '@mui/material';

type Props = {
	title: string;
}

export const UserSettingsSalary: FC<Props> = ({title}) => (
	<>
		<Grid item xs={4}>
			<Typography>{title}</Typography>
		</Grid>
		<Grid item xs={8}>
			<TextField
				size='small'
				sx={{
					maxWidth: '100px',
					backgroundColor: '#f3f3f3',
					borderRadius: '5px',

					'& input': { backgroundColor: 'white', pl: '8px' },
				}}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start' sx={{ pr: '2px' }}>
							$
						</InputAdornment>
					),
				}}
			/>
			<Typography sx={{ fontSize: '12px' }}>
				$500 - 700 - зарплати схожий кандидатів згідно з даними статистики
			</Typography>
		</Grid>
	</>
);
