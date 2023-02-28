import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { User } from '../../types/common/api/user';
import { UsersSliceStoreType } from '../../types/store/slices/users-slice-store-type';

const initialState: UsersSliceStoreType = {
	allUsers: [],
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		saveAllUsers(state, action: PayloadAction<Array<User> | null>) {
			state.allUsers = action.payload;
		},
	},
});

export const usersReducer = usersSlice.reducer;
export const { saveAllUsers } = usersSlice.actions;
export const allUsers = (state: RootState) => state.users.allUsers;
