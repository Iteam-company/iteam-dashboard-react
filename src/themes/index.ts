import { createTheme, Theme } from '@mui/material';
import { ColorMode } from '../constants/theme/theme-color';

export const themes: { [key in ColorMode]: Theme} = {
	[ColorMode.DARK]: createTheme({
		palette: {
			mode: ColorMode.DARK,
		},
	}),
	[ColorMode.LIGHT]: createTheme({
		palette: {
			mode: ColorMode.LIGHT,
		},
	}),
}
