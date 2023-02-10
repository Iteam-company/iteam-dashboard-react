import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { KeysOfLocalStorage } from '../../constants/utils/local-storage/keys-of-local-storage';
import { SignInDto } from '../../types/api/auth/sign-in.dto';
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
		setCredentials(state, action: PayloadAction<SignInDto>) {
			const { user, tokens } = action.payload;
			state.user = user;
			LocalStorageWorker.writeToLocalStorage(
				KeysOfLocalStorage.ACCESS_TOKEN,
				tokens.accessToken,
			);
			state.accessToken = tokens.accessToken;
		},
		setAccesToken(state, action: PayloadAction<{ accessToken: string }>) {
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

export const selectUser = (state: RootState) => state.authReducer.user;
export const selectAccessToken = (state: RootState) =>
	state.authReducer.accessToken;
export const selectIsAuthenticated = (state: RootState) =>
	!!state.authReducer.user && state.authReducer.accessToken;

export const authReducer = authSlice.reducer;
