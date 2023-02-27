import { FC } from 'react';
import { Grid, Slider, Typography } from '@mui/material';

type Props = {
  title: string;
}

export const UserSettingsExperience:FC<Props> = ({title}) => {
	return (
		<>
			<Grid item xs={4}>
				<Typography>{title}</Typography>
			</Grid>
			<Grid item xs={8}>
				<Slider
					aria-label='Temperature'
					defaultValue={30}
					valueLabelDisplay='auto'
					step={6}
					marks
					min={0}
					max={60}
					sx={{ color: 'grey', height: '8px' }}
				/>
			</Grid>
		</>
	);
};
