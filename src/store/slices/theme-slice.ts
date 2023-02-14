import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ThemeSliceStoreType } from "../../types/store/slices/theme-slice";

const initialState: ThemeSliceStoreType = {
	isDark: false,
};

const ThemeSlice = createSlice({
name: 'theme',
initialState,
reducers: {
  setDarkTheme(state) {
    state.isDark = !state.isDark;
  },
}
});

export const ThemeReducer = ThemeSlice.reducer;
export const { setDarkTheme } = ThemeSlice.actions;
export const darkTheme = (state: RootState) => state.theme.isDark;
