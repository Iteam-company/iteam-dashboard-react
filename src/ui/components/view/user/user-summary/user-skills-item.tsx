import { Box, Container, Typography } from '@mui/material';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { FC } from 'react';

export const UserSkillsItem: FC = () => {
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
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Typography sx={{ cursor: 'pointer' }}> Show all 9 skills </Typography>
				<ArrowRightAltOutlinedIcon
					sx={{
						pt: '3px',
					}}
				/>
			</Container>
		</>
	);
};
