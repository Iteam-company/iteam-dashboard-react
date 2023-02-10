import { ThemeProvider } from '@mui/material';
import React, { memo, useMemo, FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { routesSchema } from './constants/routes/routes-schema';
import { themes } from './themes';

export const App: FC<object> = memo(() => {
	// in the future we get theme from redux store and make it extendable
	const currentTheme = useMemo(() => themes[0], [themes]);
	const content = useRoutes(routesSchema);

	return <ThemeProvider theme={currentTheme}>{content}</ThemeProvider>;
});

App.displayName = 'App';
