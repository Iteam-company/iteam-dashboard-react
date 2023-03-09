import { Container, Grid, Paper } from '@mui/material';
import Chart from '../../components/common/mocked/chart';
import Deposits from '../../components/common/mocked/deposit';
import { Orders } from '../../components/common/mocked/orders';
import { Copyright } from '../../components/common/mocked/copyright';

export const Default = () => {
	return (
		<Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
			<Grid container spacing={3}>
				{/*Chart*/}
				<Grid item xs={12} md={8} lg={9}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							height: 240,
						}}>
						<Chart />
					</Paper>
				</Grid>
				{/* Recent Deposits */}
				<Grid item xs={12} md={4} lg={3}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							height: 240,
						}}>
						<Deposits />
					</Paper>
				</Grid>
				{/* Recent Orders */}
				<Grid item xs={12}>
					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
						<Orders />
					</Paper>
				</Grid>
			</Grid>
			<Copyright sx={{ pt: 4 }} />
		</Container>
	);
};
