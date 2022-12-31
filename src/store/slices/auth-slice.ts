import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KeysOfLocalStorage } from '../../constants/utils/local-storage/keys-of-local-storage';
import { AuthSliceStoreType } from '../../types/store/slices/auth-slice-store-type';
import { LocalStorageWorker } from '../../utils/local-storage/local-storage-worker';

const initialState: AuthSliceStoreType = {
	user: null,
	accessToken: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials(state, action: PayloadAction<any>) {
			const { user, accessToken } = action.payload;

			state.user = action.payload.user;
			LocalStorageWorker.writeToLocalStorage(
				KeysOfLocalStorage.ACCESS_TOKEN,
				accessToken,
			);
			state.accessToken = action.payload.accessToken;
		},
		setAccesToken(state, action: PayloadAction<any>) {
			state.accessToken = action.payload.accessToken;
			LocalStorageWorker.writeToLocalStorage(
				KeysOfLocalStorage.ACCESS_TOKEN,
				action.payload.accessToken,
			);
		},
		removeCredentials(state) {
			state.user = null;
			state.accessToken = null;
			LocalStorageWorker.removeItem(KeysOfLocalStorage.ACCESS_TOKEN);
		},
	},
});

export const { setAccesToken, setCredentials, removeCredentials } =
	authSlice.actions;

export const authReducer = authSlice.reducer;
