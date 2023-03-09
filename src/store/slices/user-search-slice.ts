import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Criteries } from '../../types/admin/users/criteries';
import { GetPipeType } from '../../types/admin/users/pipe-type';
import { userSearchSliceStoreType } from '../../types/store/slices/user-search-slice-store-type';

const defaultSearchProps = {
	pipeType: GetPipeType.FILTER,
	critery: Criteries.EMAIL,
};

const initialState: userSearchSliceStoreType = {
	searchProps: defaultSearchProps,
};

const userSearchSlice = createSlice({
	name: 'userSearch',
	initialState,
	reducers: {
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchProps.value = action.payload;
		},
		setSearchCritery: (state, action: PayloadAction<Criteries>) => {
			state.searchProps.critery = action.payload;
		},
	},
});

export const userSearch = (state: RootState) => state.userSearch.searchProps;
export const { setSearchValue, setSearchCritery } = userSearchSlice.actions;
export const userSearchReducer = userSearchSlice.reducer;
