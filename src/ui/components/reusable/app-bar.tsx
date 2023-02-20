import { FC, memo, useState } from 'react';
import { AppBar } from '../../components/mocked/app-bar';
import { Badge, IconButton, Toolbar, Typography } from '@mui/material';
import { Notifications, Menu } from '@mui/icons-material';

type Props = {
	title?: string;
};

export const CommonAppBar: FC<Props> = memo(({ title }) => {
	const [open, setOpen] = useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};
	return (
		<AppBar position='absolute' open={open}>
			<Toolbar
				sx={{
					pr: '24px',
				}}>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='open drawer'
					onClick={toggleDrawer}
					sx={{
						marginRight: '36px',
						...(open && { display: 'none' }),
					}}>
					<Menu />
				</IconButton>
				<Typography
					component='h1'
					variant='h6'
					color='inherit'
					noWrap
					sx={{ flexGrow: 1 }}>
					{title}
				</Typography>
				<IconButton color='inherit'>
					<Badge badgeContent={4} color='secondary'>
						<Notifications />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
});

CommonAppBar.displayName = 'CommonAppBar';