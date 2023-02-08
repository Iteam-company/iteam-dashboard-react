import React from 'react';
import { Box, Button, Card, Container, CssBaseline, Typography } from '@mui/material';
import Flexbox from '../../../utils/styles/flexbox';

export const UserInfo = () => {
	return (
		<Card sx={{ mt: 6, p: 2, mb: 2 }}>
			<CssBaseline />
			<Container sx={{
				display: 'flex',
				flexWrap: {md: 'nowrap', xs: 'wrap'},
				justifyContent: {xs: 'center'},
				alignItems: 'center'
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
					<Button variant='contained' sx={{ mt: 3, mb: 2, minWidth: '200px' }}>
						Send a message
					</Button>
				</Box>
				<Box sx={{ width: '100%' , ml:{ md: '15%'}}}>
					<Typography
						variant='h6'
						component='h2'
						sx={{
							color: (props) => props.palette.primary.light,
							textAlign: {xs: 'center', md: 'left'},
						}}>
						Chris Pratt
					</Typography>
					<Typography
						variant='subtitle2'
						component='h3'
						sx={{
							mb: 2,
							textAlign: {xs: 'center', md: 'left'}
						}}>
						All the best happens unexpectedly
					</Typography>
					<Box
						sx={{
							width: '100%',
							height: '1px',
							backgroundColor: '#f3f3f3',
							mb: 2,
						}}></Box>
					<Container sx={{display: 'flex',justifyContent: { xs: 'center', md: 'flex-start'}, p: {md: '0'}, height: '100%'}}>
						<Box
							sx={{
								mr: '15%',
							}}>
							<Typography component={'div'} variant='caption'>
								Birthday:
							</Typography>
							<Typography component={'div'} variant='caption'>
								Hometown:
							</Typography>
							<Typography component={'div'} variant='caption'>
								Relationship status:
							</Typography>
							<Typography component={'div'} variant='caption'>
								Company:
							</Typography>
							<Typography component={'div'} variant='caption'>
								Language:
							</Typography>
						</Box>
						<Box
							sx={{
								color: (props) => props.palette.primary.main,
							}}>
							<Typography component={'div'} variant='caption'>
								June 21, 1979
							</Typography>
							<Typography component={'div'} variant='caption'>
								Virginia
							</Typography>
							<Typography component={'div'} variant='caption'>
								Enagaged to Anna Faris
							</Typography>
							<Typography component={'div'} variant='caption'>
								Guardian of the Galaxy
							</Typography>
							<Typography component={'div'} variant='caption'>
								English
							</Typography>
							<Typography
								component={'div'}
								variant='body2'
								sx={{ cursor: 'pointer', mt: 1 }}>
								Show full information
							</Typography>
						</Box>
					</Container>
				</Box>
			</Container>
		</Card>
	);
};
