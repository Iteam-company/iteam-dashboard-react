import { ThemeProvider } from '@mui/material';
import React, { memo, useMemo, FC, PropsWithChildren } from 'react';
import { useRoutes } from 'react-router-dom';
import { ColorMode } from './constants/theme/theme-color';
import { useThemeDetector } from './hooks/color-theme/use-colot-theme-detector';
import { useAppSelector } from './hooks/store/use-app-selector-hook';
import { selectRoutesSchemaByUserRole } from './store/slices/auth-slice';
import { darkTheme } from './store/slices/theme-slice';
import { themes } from './themes';

export const App: FC<PropsWithChildren> = memo(() => {
	const DarkTheme = useAppSelector(darkTheme);
	const isDarkTheme = useThemeDetector();
	// in the future we get theme from redux store and make it extendable
	const currentTheme = useMemo(
		() =>
			DarkTheme || isDarkTheme
				? themes[ColorMode.DARK]
				: themes[ColorMode.LIGHT],
		[themes, DarkTheme, isDarkTheme],
	);
	const routesByRole = useAppSelector(selectRoutesSchemaByUserRole);
	// console.log(routesByRole, 'routesByRoleroutesByRole');
	const content = useRoutes(routesByRole);

	return <ThemeProvider theme={currentTheme}>{content}</ThemeProvider>;
});

App.displayName = 'App';
