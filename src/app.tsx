import { ThemeProvider } from '@mui/material';
import { memo, FC, PropsWithChildren } from 'react';
import { useRoutes } from 'react-router-dom';
import { useHelmet } from './hooks/helmet/use-helmet';

import { useAppSelector } from './hooks/store/use-app-selector-hook';
import { selectRoutesSchemaByUserRole } from './store/slices/auth-slice';
import { selectTheme } from './store/slices/theme-slice';

export const App: FC<PropsWithChildren> = memo(() => {
	// get theme
	const theme = useAppSelector(selectTheme);

	// get mock up depend of role of user
	const routesByRole = useAppSelector(selectRoutesSchemaByUserRole);
	const content = useRoutes(routesByRole);

	// get tab title within helmet in hook
	const { helmet } = useHelmet();

	return (
		<ThemeProvider theme={theme}>
			{helmet}
			{content}
		</ThemeProvider>
	);
});

App.displayName = 'App';
