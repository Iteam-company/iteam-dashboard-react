import { useMemo } from 'react';
import { ColorMode } from '../../constants/theme/theme-color';
import { userSetDarkTheme } from '../../store/slices/theme-slice';
import { themes } from '../../themes';
import { useAppSelector } from '../store/use-app-selector-hook';

export const useColorTheme = () => {
	const darkTheme = useAppSelector(userSetDarkTheme);

	return useMemo(
		() => (darkTheme ? themes[ColorMode.DARK] : themes[ColorMode.LIGHT]),
		[darkTheme],
	);
};
