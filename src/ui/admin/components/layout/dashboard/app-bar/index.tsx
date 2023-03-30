import { Menu } from '@mui/icons-material';
import {
	styled,
	AppBar as MuiAppBar,
	AppBarProps as MuiAppBarProps,
	Toolbar,
	IconButton,
	Typography,
} from '@mui/material';
import { FC, memo, MouseEventHandler, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
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
	component?: JSX.Element;
}

export const AppBar: FC<AppBarProps> = memo(
	({ toggleDrawer, isDrawerOpen, component }) => {
		const params = useLocation();
		const title = params.pathname.replace(/[^a-zA-Z ]/g, '');
		const helmetTitle = title
			? title[0].toUpperCase() + title.slice(1)
			: 'Dasboard';

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
						{helmetTitle}
					</Typography>
					<IconButton color='inherit'>{component}</IconButton>
				</Toolbar>
			</StypedAppBar>
		);
	},
);

AppBar.displayName = 'AppBar';
