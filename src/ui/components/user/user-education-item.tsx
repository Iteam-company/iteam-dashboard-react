import { Box, Typography } from '@mui/material';
import Flexbox from '../reusable/flexbox';

export const UserEducationItem = () => {
	return (
		<>
			<Flexbox>
				<Box
					component='img'
					alt='user-avatar'
					src='https://via.placeholder.com/50'
					sx={{ mr: 2, maxWidth: '50px', maxHeight: '50px' }}
				/>
				<Box>
					<Typography variant='body2' sx={{ fontWeight: '800' }}>
						{' '}
						National Transport University
					</Typography>
					<Flexbox>
						<Box sx={{ color: '#424242', mr: 5 }}>
							<Typography variant='body2'>
								Master of Architecture (MArch), Computer Science
							</Typography>
							<Typography variant='body2'>Sep 2017 - Jun 2021</Typography>
						</Box>
						<Typography sx={{ cursor: 'pointer' }}>see more...</Typography>
					</Flexbox>
				</Box>
			</Flexbox>
			<Box
				sx={{
					width: '100%',
					height: '1px',
					backgroundColor: '#f3f3f3',
					mt: 1,
				}}></Box>
		</>
	);
};
