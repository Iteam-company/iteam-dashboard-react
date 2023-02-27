import { Box, Toolbar } from '@mui/material';
import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

export const ViewContainer = memo(() => {
	return (
		<Box
			component='main'
			sx={{
				backgroundColor: (theme) => theme.palette.background.default,
				flexGrow: 1,
				height: '100vh',
				overflow: 'auto',
				display: 'flex',
				flexDirection: 'column',
			}}>
			<Toolbar />
			<Box flexGrow={1}>
				<Outlet />
			</Box>
		</Box>
	);
});

ViewContainer.displayName = 'ViewContainer';
