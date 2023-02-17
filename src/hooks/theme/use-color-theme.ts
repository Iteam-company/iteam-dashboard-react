import { createTheme, Theme } from '@mui/material';
import { colorTheme } from '../../store/slices/theme-slice';
import { useAppSelector } from '../store/use-app-selector-hook';

export const setColorOfTheme = () => {
	const colorThemes = useAppSelector(colorTheme);

	const themes: Theme = createTheme({
		palette: {
			mode: colorThemes,
		},
	});

	return themes;
};
