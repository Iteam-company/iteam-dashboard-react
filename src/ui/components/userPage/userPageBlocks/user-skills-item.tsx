import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import Flexbox from '../../../utils/styles/flexbox';

export const UserSkillsItem: React.FC = () => {
	return (
		<>
			<Typography>React.js</Typography>
			<Box
				sx={{
					width: '100%',
					height: '1px',
					backgroundColor: '#f3f3f3',
					mt: 1,
					mb: 1,
				}}></Box>
			<Flexbox
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Typography sx={{ cursor: 'pointer' }}> Show all 9 skills </Typography>
				<ArrowRightAltOutlinedIcon
					sx={{
						pt: '3px',
					}}
				/>
			</Flexbox>
		</>
	);
};
