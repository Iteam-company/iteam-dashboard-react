import {
	Box,
	Card,
	Container,
	CssBaseline,
	Link,
	Typography,
} from '@mui/material';

export const UserInfo = () => {
	return (
		<Card sx={{ mt: 1, p: 2, mb: 2 }}>
			<CssBaseline />
			<Container
				sx={{
					display: 'flex',
					flexWrap: { md: 'nowrap', xs: 'wrap' },
					justifyContent: { xs: 'center' },
					alignItems: 'center',
				}}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						margin: 'auto',
					}}>
					<Box
						component='img'
						alt='user-avatar'
						src='https://via.placeholder.com/200'
					/>
				</Box>
				<Box sx={{ width: '100%', ml: { md: '15%' } }}>
					<Typography
						variant='h6'
						component='h2'
						sx={{
							color: (props) => props.palette.primary.light,
							textAlign: { xs: 'center', md: 'left' },
						}}>
						Chris Pratt
					</Typography>
					<Typography
						variant='subtitle2'
						component='h3'
						sx={{
							mb: 2,
							textAlign: { xs: 'center', md: 'left' },
						}}>
						employee position: Front End Dev
					</Typography>
					<Box
						sx={{
							width: '100%',
							height: '1px',
							backgroundColor: '#f3f3f3',
							mb: 2,
						}}></Box>
					<Container
						sx={{
							display: 'flex',
							justifyContent: { xs: 'center', md: 'flex-start' },
							p: { md: '0' },
							height: '100%',
						}}>
						<Box
							sx={{
								mr: '15%',
							}}>
							<Typography component={'div'} variant='caption'>
								Birthday:
							</Typography>
							<Typography component={'div'} variant='caption'>
								Location:
							</Typography>
							<Typography component={'div'} variant='caption'>
								Date of the first working day:
							</Typography>
							<Typography component={'div'} variant='caption'>
								Projects:
							</Typography>
							<Typography component={'div'} variant='caption'>
								English level:
							</Typography>
						</Box>
						<Box
							sx={{
								color: (props) => props.palette.primary.main,
							}}>
							<Typography component={'div'} variant='caption'>
								Lorem ipsum dolor sit amet.
							</Typography>
							<Typography component={'div'} variant='caption'>
								Lorem ipsum dolor sit amet.
							</Typography>
							<Typography component={'div'} variant='caption'>
								Lorem ipsum dolor sit amet.
							</Typography>
							<Link
								href='https://www.google.com.ua/?hl=ru'
								variant='caption'
								target='_blank'>
								Projects
							</Link>
							<Typography component={'div'} variant='caption'>
								English
							</Typography>
						</Box>
					</Container>
				</Box>
			</Container>
		</Card>
	);
};
