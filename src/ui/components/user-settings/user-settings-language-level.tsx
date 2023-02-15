import { FC, useState } from 'react';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import { Box, Checkbox, Grid, Typography } from '@mui/material';

type Props = {
  title: string;
}

export const UserSettingsLanguagelevel:FC<Props> = ({title}) => {
	const [englishLevels] = useState<string[]>([
		'No English',
		'Beginner',
		'Pre-intermediate',
		'Intermediate',
		'Upper-Intermediate',
		'Advanced',
	]);
	return (
		<>
			<Grid item xs={4} sx={{ alignSelf: 'flex-start', mt: 2 }}>
				<Typography>{title}</Typography>
			</Grid>
			<Grid item xs={8} sx={{ mt: 2 }}>
				{englishLevels.map((item, i) => (
					<Box key={`${item}-${i}`}>
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
