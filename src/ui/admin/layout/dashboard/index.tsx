import { Box } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import { ViewDefaultPage } from '../../../components/common/view-default-page';
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
			<ViewDefaultPage tabTitle='Dasboard'>
				<AppBar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
				<AdminSidebar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
				<ViewContainer />
			</ViewDefaultPage>
		</Box>
	);
});

AdminDashboard.displayName = 'AdminDashboard';
