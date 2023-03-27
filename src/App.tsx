import { ThemeProvider } from '@mui/material';
import { memo, FC, PropsWithChildren } from 'react';
import { useRoutes } from 'react-router-dom';

import { useAppSelector } from './hooks/store/use-app-selector-hook';
import { selectRoutesSchemaByUserRole } from './store/slices/auth-slice';
import { selectTheme } from './store/slices/theme-slice';

export const App: FC<PropsWithChildren> = memo(() => {
	const theme = useAppSelector(selectTheme);

	// in the future we get theme from redux store and make it extendable
	const routesByRole = useAppSelector(selectRoutesSchemaByUserRole);
	const content = useRoutes(routesByRole);
	return <ThemeProvider theme={theme}>{content}</ThemeProvider>;
});

App.displayName = 'App';
