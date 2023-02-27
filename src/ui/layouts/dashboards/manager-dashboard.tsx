import {
	Badge,
	Box,
	Divider,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import { Notifications, Menu, ChevronLeft } from '@mui/icons-material';

import { Drawer } from '../../components/mocked/drawer';
import { DashboardSidebarNav } from '../../components/dasboard-sidebar-nav';
import { SidebarNavigationListItems } from '../../components/manager-dashboard/dasboard-sidebar/sidebar-navigation-list-items';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export const ManagerDashboard = () => {
	const [open, setOpen] = useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<Box sx={{ display: 'flex' }}>
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
};
