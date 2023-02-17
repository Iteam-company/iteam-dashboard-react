import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { ModeColor } from '../../types/theme-mode/theme-mode';
import { ThemeSliceStoreType } from '../../types/store/slices/theme-slice';

const colorWhichUserUse = window.matchMedia('(prefers-color-scheme: dark)').matches
	? 'dark'
	: 'light';

const initialState: ThemeSliceStoreType = {
	colorTheme: colorWhichUserUse,
};

const ThemeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setColorOfTheme(state, action: PayloadAction<ModeColor>) {
			state.colorTheme = action.payload;
		},
	},
});

export const ThemeReducer = ThemeSlice.reducer;
export const colorTheme = (state: RootState) => state.theme.colorTheme;