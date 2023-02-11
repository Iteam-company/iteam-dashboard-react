import { ThemeProvider } from '@mui/material';
import React, { memo, useMemo, FC, PropsWithChildren } from 'react';
import { useRoutes } from 'react-router-dom';
import { useAppSelector } from './hooks/store/use-app-selector-hook';
import { selectRoutesSchemaByUserRole } from './store/slices/auth-slice';
import { themes } from './themes';

export const App: FC<PropsWithChildren> = memo(() => {
	// in the future we get theme from redux store and make it extendable
	const currentTheme = useMemo(() => themes[0], [themes]);
	const routesByRole = useAppSelector(selectRoutesSchemaByUserRole);
	// console.log(routesByRole, 'routesByRoleroutesByRole');
	const content = useRoutes(routesByRole);

	return <ThemeProvider theme={currentTheme}>{content}</ThemeProvider>;
});

App.displayName = 'App';
