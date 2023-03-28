import { Menu, Notifications } from '@mui/icons-material';
import {
	styled,
	AppBar as MuiAppBar,
	AppBarProps as MuiAppBarProps,
	Toolbar,
	IconButton,
	Typography,
	Badge,
} from '@mui/material';
import { FC, memo, MouseEventHandler, PropsWithChildren } from 'react';
import { useHelmet } from '../../../../../../hooks/helmet/use-helmet';
import { Sizes } from '../../../../utils/constants';

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const StypedAppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop: string) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: Sizes.SIDEBAR,
		width: `calc(100% - ${Sizes.SIDEBAR}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

interface AppBarProps extends PropsWithChildren {
	toggleDrawer?: MouseEventHandler<HTMLButtonElement>;
	isDrawerOpen?: boolean;
}

export const AppBar: FC<AppBarProps> = memo(
	({ toggleDrawer, isDrawerOpen }) => {
		const { appBarTitle } = useHelmet();

		return (
			<StypedAppBar position='absolute' open={isDrawerOpen}>
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
							...(isDrawerOpen && { display: 'none' }),
						}}>
						<Menu />
					</IconButton>
					<Typography
						component='h1'
						variant='h6'
						color='inherit'
						noWrap
						sx={{ flexGrow: 1 }}>
						{appBarTitle}
					</Typography>
					<IconButton color='inherit'>
						<Badge badgeContent={4} color='secondary'>
							<Notifications />
						</Badge>
					</IconButton>
				</Toolbar>
			</StypedAppBar>
		);
	},
);

AppBar.displayName = 'AppBar';
