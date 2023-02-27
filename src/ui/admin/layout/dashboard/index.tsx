import {
	Badge,
	Box,
	Divider,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import { Notifications, Menu, ChevronLeft } from '@mui/icons-material';

import { Drawer } from '../../../components/common/mocked/drawer';
import { Outlet } from 'react-router-dom';
import { memo, useState } from 'react';
import { AppBar } from '../../components/layout/dashboard/app-bar';
import { AdminSidebar } from '../../components/layout/dashboard/side-bar';

export const AdminDashboard = memo(() => {
	const [open, setOpen] = useState(true);
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
				<AdminSidebar />
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
					display: 'flex',
					flexDirection: 'column',
				}}>
				<Toolbar />
				<Box flexGrow={1}>
					<Outlet />
				</Box>
			</Box>
		</Box>
	);
});

AdminDashboard.displayName = 'AdminDashboard';
