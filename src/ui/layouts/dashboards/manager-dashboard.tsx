import {
	Badge,
	Box,
	Container,
	Divider,
	Grid,
	IconButton,
	Paper,
	Toolbar,
	Typography,
} from '@mui/material';
import { Notifications, Menu, ChevronLeft } from '@mui/icons-material';
import React from 'react';
import { Copyright } from '../../components/reusable/copyright';
import { AppBar } from '../../components/mocked/app-bar';
import Chart from '../../components/mocked/chart';
import Deposits from '../../components/mocked/deposit';
import Orders from '../../components/mocked/orders';
import { Drawer } from '../../components/mocked/drawer';
import { DashboardSidebarNav } from '../../components/dasboard-sidebar-nav';
import { SidebarNavigationListItems } from '../../components/manager-dashboard/dasboard-sidebar/sidebar-navigation-list-items';

export const ManagerDashboard = () => {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};
	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar position='absolute' open={open}>
				<Toolbar
					sx={{
						pr: '24px', // keep right padding when drawer closed
					}}>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='open drawer'
						onClick={toggleDrawer}
						sx={{
							marginRight: '36px',
							...(open && { display: 'none' }),
						}}>
						<Menu />
					</IconButton>
					<Typography
						component='h1'
						variant='h6'
						color='inherit'
						noWrap
						sx={{ flexGrow: 1 }}>
						Dashboard
					</Typography>
					<IconButton color='inherit'>
						<Badge badgeContent={4} color='secondary'>
							<Notifications />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer variant='permanent' open={open}>
				<Toolbar
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end',
						px: [1],
					}}>
					<IconButton onClick={toggleDrawer}>
						<ChevronLeft />
					</IconButton>
				</Toolbar>
				<Divider />
				<DashboardSidebarNav>
					<SidebarNavigationListItems />
				</DashboardSidebarNav>
			</Drawer>
			<Box
				component='main'
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'light'
							? theme.palette.grey[100]
							: theme.palette.grey[900],
					flexGrow: 1,
					height: '100vh',
					overflow: 'auto',
				}}>
				<Toolbar />
				<Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
					<Grid container spacing={3}>
						{/* Chart */}
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
			</Box>
		</Box>
	);
};
