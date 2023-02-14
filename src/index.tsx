import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';

// importing fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
	<StrictMode>
		<HelmetProvider>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<BrowserRouter>
						<CssBaseline enableColorScheme />
						<SnackbarProvider maxSnack={3} hideIconVariant>
							<App />
						</SnackbarProvider>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</HelmetProvider>
	</StrictMode>,
);
