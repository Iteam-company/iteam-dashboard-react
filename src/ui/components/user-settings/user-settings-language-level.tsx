import React, { useId, useState } from 'react';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import {
	Box,
	Checkbox,
	Grid,
	Typography,
} from '@mui/material';

export const UserSettingsLanguagelevel = () => {
	const id = useId();
  const [englishLevels] = useState<string[]>([
    'No English',
    'Beginner',
    'Pre-intermediate',
    'Intermediate',
    'Upper-Intermediate',
    'Advanced',
  ])
	return (
		<>
			<Grid item xs={4} sx={{alignSelf: 'flex-start', mt: 2}}>
				<Typography>Рівень Англійської</Typography>
			</Grid>
			<Grid item xs={8} sx={{mt: 2}}>
				{englishLevels.map((item) => (
					<Box key={id}>
						<Checkbox
              icon={<RadioButtonUncheckedOutlinedIcon />}
              checkedIcon={<RadioButtonCheckedOutlinedIcon />}
						/>{' '}
						{item}
					</Box>
				))}
			</Grid>
		</>
	);
};
