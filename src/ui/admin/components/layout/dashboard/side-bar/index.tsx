import { List } from '@mui/material';
import { memo, PropsWithChildren, FC } from 'react';
import { AdminSidebarNavigationListItems } from './sidebar-navigation-list-items';

export const AdminSidebar: FC<PropsWithChildren> = memo(() => {
	return (
		<List component='nav'>
			<AdminSidebarNavigationListItems />
		</List>
	);
});

AdminSidebar.displayName = 'DashboardSidebarNav';
