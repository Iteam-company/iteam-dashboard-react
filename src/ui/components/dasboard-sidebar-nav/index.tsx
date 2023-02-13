import { List } from '@mui/material';
import React, { memo, PropsWithChildren, FC } from 'react';

export const DashboardSidebarNav: FC<PropsWithChildren> = memo(
	({ children }) => {
		return <List component='nav'>{children}</List>;
	},
);

DashboardSidebarNav.displayName = 'DashboardSidebarNav';
