import { ThemeProvider } from '@mui/material';
import React, { memo, FC, PropsWithChildren } from 'react';
import { useRoutes } from 'react-router-dom';
import { useColorTheme } from './hooks/color-theme/use-color-theme-detector';
import { useAppSelector } from './hooks/store/use-app-selector-hook';
import { selectRoutesSchemaByUserRole } from './store/slices/auth-slice';

export const App: FC<PropsWithChildren> = memo(() => {
	const currentTheme = useColorTheme();
	// in the future we get theme from redux store and make it extendable
	const routesByRole = useAppSelector(selectRoutesSchemaByUserRole);
	// console.log(routesByRole, 'routesByRoleroutesByRole');
	const content = useRoutes(routesByRole);
	return <ThemeProvider theme={currentTheme}>{content}</ThemeProvider>;
});

App.displayName = 'App';
