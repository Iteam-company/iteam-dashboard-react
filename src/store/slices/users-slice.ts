import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { User } from '../../types/common/api/user';
import { UsersSliceStoreType } from '../../types/store/slices/users-slice-store-type';

const initialState: UsersSliceStoreType = {
	users: null,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getAllUsers(state, action: PayloadAction<User[]>) {
			state.users = action.payload;
		},
	},
});


export const usersReducer = usersSlice.reducer;
export const allUsers = (state: RootState) => state.users;