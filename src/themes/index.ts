import { createTheme, Theme } from '@mui/material';

export const themes: Array<Partial<Theme> | ((outerTheme: Theme) => Theme)> = [
	createTheme(),
];
