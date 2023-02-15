import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

type Props = {
  title: string;
}

export const UserSettingsSelect: React.FC<Props> = ({title}) => {
	return (
		<>
			<Grid item xs={4}>
      {title}
			</Grid>
			<Grid item xs={8}>
				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label' sx={{ mt: '-9px' }}>
						{title}
					</InputLabel>
					<Select
						fullWidth
						id='demo-simple-select-label'
						label={title}
						size='small'>
						<MenuItem>Uk</MenuItem>
						<MenuItem>USA</MenuItem>
						<MenuItem>Ge</MenuItem>
					</Select>
				</FormControl>
			</Grid>
		</>
	);
};
