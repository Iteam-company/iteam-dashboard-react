import { Box, Typography } from '@mui/material';
import { Flexbox } from '../../../../../../styles/flex-box';

export const UserExperienceItem = () => {
	return (
		<Flexbox>
			<Box
				component='img'
				alt='user-avatar'
				src='https://via.placeholder.com/50'
				sx={{ mr: 2, maxWidth: '50px', maxHeight: '50px' }}
			/>
			<Box sx={{ width: '100%' }}>
				<Typography
					variant='subtitle1'
					sx={{
						fontWeight: '800',
						lineHeight: '120%',
					}}>
					Full-Stack Developer
				</Typography>
				<Box
					sx={{
						color: '#424242',
					}}>
					<Typography variant='body2'>Upwork Freelance</Typography>
					<Typography variant='body2'>Apr 2019 - Presen 3 yrs 7 mos</Typography>
					<Box
						sx={{
							mb: 2,
						}}>
						Ukraine
					</Box>
					<Flexbox>
						<Box sx={{ mb: 2 }}>
							<Typography variant='body2'>
								Project: Smartannie (litesite.com)
							</Typography>
							<Typography variant='body2'>
								Business management tool for interaction with customers and
								clients
							</Typography>
						</Box>
						<Typography sx={{ ml: 5, cursor: 'pointer' }}>
							see more...
						</Typography>
					</Flexbox>
					<Typography variant='body2'>
						Skills: React.js, JS, TS, Npm, Angular, Rxjs
					</Typography>
				</Box>
			</Box>
		</Flexbox>
	);
};
