import { ChevronLeft } from '@mui/icons-material';
import { Divider, Drawer, IconButton, styled, Toolbar } from '@mui/material';
import { memo, PropsWithChildren, FC } from 'react';
import { Sizes } from '../../../../utils/constants';
import { AdminSidebarNavigation } from './sidebar-navigation';
import { MouseEventHandler } from 'react';

export const StyledDrawer = styled(Drawer, {
	shouldForwardProp: (prop: string) => prop !== 'open',
})(({ theme, open }) => ({
	'& .MuiDrawer-paper': {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: Sizes.SIDEBAR,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: 'border-box',
		...(!open && {
			overflowX: 'hidden',
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9),
			},
		}),
	},
}));

interface AdminSidebarProps extends PropsWithChildren {
	toggleDrawer: MouseEventHandler<HTMLButtonElement>;
	isDrawerOpen: boolean;
}

export const AdminSidebar: FC<AdminSidebarProps> = memo(
	({ toggleDrawer, isDrawerOpen }) => {
		return (
			<StyledDrawer variant='permanent' open={isDrawerOpen}>
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
				<AdminSidebarNavigation />
			</StyledDrawer>
		);
	},
);

AdminSidebar.displayName = 'DashboardSidebarNav';
