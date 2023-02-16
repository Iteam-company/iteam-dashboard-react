import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { ThemeSliceStoreType } from '../../types/store/slices/theme-slice';

const colorIsBlack = window
	.matchMedia('(prefers-color-scheme: dark)').matches;

const initialState: ThemeSliceStoreType = {
	isDark: colorIsBlack,
};

const ThemeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setDarkTheme(state) {
			state.isDark = !state.isDark;
		},
	},
});

export const ThemeReducer = ThemeSlice.reducer;
export const { setDarkTheme } = ThemeSlice.actions;
export const userSetDarkTheme = (state: RootState) => state.theme.isDark;
