import { memo, useCallback } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { CommontRoutes } from '../../../../../../constants/routes/application-routes/common-routes';
import { AdminRoutes } from '../../../../../../constants/routes/application-routes/admin-routes';
import { List } from '@mui/material';
import TableRowsIcon from '@mui/icons-material/TableRows';

const sidebarOptionsDescription = [
	{
		text: 'Dashboard',
		icon: <DashboardIcon />,
		route: CommontRoutes.ROOT_PATH,
	},
	{
		text: 'Users',
		icon: <PeopleIcon />,
		route: AdminRoutes.USERS,
	},
	{
		text: 'Orders',
		icon: <ShoppingCartIcon />,
		route: AdminRoutes.ORDERS,
	},
	{
		text: 'Reports',
		icon: <BarChartIcon />,
		route: AdminRoutes.REPORTS,
	},
	{
		text: 'Integrations',
		icon: <LayersIcon />,
		route: AdminRoutes.INTEGRATIONS,
	},
	{
		text: 'Users Table',
		icon: <TableRowsIcon />,
		route: AdminRoutes.USERS_TABLE,
	},
];

export const AdminSidebarNavigation = memo(() => {
	const navigate = useNavigate();

	const handleClick = useCallback(
		(route: AdminRoutes | CommontRoutes) => {
			navigate(route);
		},
		[navigate],
	);
	return (
		<List component='nav'>
			{sidebarOptionsDescription.map(({ text, icon, route }, index) => (
				<ListItemButton key={text + index} onClick={() => handleClick(route)}>
					<ListItemIcon>{icon}</ListItemIcon>
					<ListItemText primary={text} />
				</ListItemButton>
			))}
		</List>
	);
});

AdminSidebarNavigation.displayName = 'SidebarNavigationListItems';
