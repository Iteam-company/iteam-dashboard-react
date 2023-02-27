import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { User } from '../../types/common/api/user';
import { UsersSliceStoreType } from '../../types/store/slices/users-slice-store-type';

const initialState: UsersSliceStoreType = {
	allUsers: [],
	filteredUser: [],
};

interface PropertiesForFiltering {
	properties: keyof User;
	deferredQuery: string;
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		saveAllUsers(state, action: PayloadAction<Array<User> | null>) {
			state.allUsers = action.payload;
			state.filteredUser = action.payload;
		},
		userBySearching(state, action: PayloadAction<PropertiesForFiltering>) {
			state.filteredUser =
				state.allUsers?.filter((user: User) => {
					const { properties } = action.payload;
					if (user[properties]) {
						return user[properties]!.toString()
							.toLowerCase()
							.includes(action.payload.deferredQuery.toLowerCase());
					}
					return [];
				}) || [];
		},
	},
});

export const usersReducer = usersSlice.reducer;
export const { saveAllUsers, userBySearching } = usersSlice.actions;
export const allUsers = (state: RootState) => state.users.allUsers;
export const filteredUser = (state: RootState) => state.users.filteredUser;
