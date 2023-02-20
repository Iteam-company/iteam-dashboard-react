import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { ThemeSliceStoreType } from '../../types/store/slices/theme-slice';
import { themes } from '../../constants/themes';
import { ThemeNames } from '../../constants/themes/theme-names';

const initialThemeName = window.matchMedia('(prefers-color-scheme: dark)')
	.matches
	? ThemeNames.DARK
	: ThemeNames.LIGHT;

const initialState: ThemeSliceStoreType = {
	themeName: ThemeNames.CUSTOM,
};

const ThemeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setThemeName(state, action: PayloadAction<ThemeNames>) {
			state.themeName = action.payload;
		},
	},
});

export const { setThemeName } = ThemeSlice.actions;

export const ThemeReducer = ThemeSlice.reducer;
export const selectTheme = (state: RootState) => themes[state.theme.themeName];
