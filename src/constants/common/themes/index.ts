import { createTheme, PaletteOptions, Theme } from '@mui/material';
import { green, purple } from '@mui/material/colors';
import { ThemeNames } from './theme-names';

export const themes: { [key in ThemeNames]: Theme } = {
	[ThemeNames.DARK]: createTheme({
		palette: {
			mode: 'dark',
		},
	}),
	[ThemeNames.LIGHT]: createTheme({
		palette: {
			mode: 'light',
		},
	}),
	[ThemeNames.CUSTOM]: createTheme({
		palette: {
			primary: {
				main: purple[500],
			},
			secondary: {
				main: green[500],
			},
		},
	}),
};
