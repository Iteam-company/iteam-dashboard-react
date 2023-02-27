import { memo, useCallback } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Routes } from '../../../../constants/routes/routes';
import { useNavigate } from 'react-router-dom';

const sidebarOptionsDescription = [
	{
		text: 'Dashboard',
		icon: <DashboardIcon />,
		route: Routes.ROOT_PATH,
	},
	{
		text: 'Users',
		icon: <PeopleIcon />,
		route: Routes.USERS,
	},
	{
		text: 'Orders',
		icon: <ShoppingCartIcon />,
		route: Routes.ORDERS,
	},
	{
		text: 'Reports',
		icon: <BarChartIcon />,
		route: Routes.REPORTS,
	},
	{
		text: 'Integrations',
		icon: <LayersIcon />,
		route: Routes.INTEGRATIONS,
	},
];

export const SidebarNavigationListItems = memo(() => {
	const navigate = useNavigate();

	const handleClick = useCallback(
		(route: Routes) => {
			navigate(route);
		},
		[navigate],
	);
	return (
		<>
			{sidebarOptionsDescription.map(({ text, icon, route }, index) => (
				<ListItemButton key={text + index} onClick={() => handleClick(route)}>
					<ListItemIcon>{icon}</ListItemIcon>
					<ListItemText primary={text} />
				</ListItemButton>
			))}
		</>
	);
});

SidebarNavigationListItems.displayName = 'SidebarNavigationListItems';
