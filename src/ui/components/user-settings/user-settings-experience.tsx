import { Grid, Slider, Typography } from '@mui/material';
import React from 'react';

export const UserSettingsExperience = () => {
	return (
		<>
			<Grid item xs={4}>
				<Typography>Досвід роботи</Typography>
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
