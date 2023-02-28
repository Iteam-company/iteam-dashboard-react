import { Box } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import { AppBar } from '../../components/layout/dashboard/app-bar';
import { AdminSidebar } from '../../components/layout/dashboard/side-bar';
import { ViewContainer } from '../../components/layout/dashboard/view-container';

export const AdminDashboard = memo(() => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(true);
	const toggleDrawer = useCallback(() => {
		setIsDrawerOpen((prevValue) => !prevValue);
	}, [setIsDrawerOpen]);
	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
			<AdminSidebar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
			<ViewContainer />
		</Box>
	);
});

AdminDashboard.displayName = 'AdminDashboard';
