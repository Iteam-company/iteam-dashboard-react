import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Roles } from '../../constants/roles';
import { rolestRoutes } from '../../constants/routes/routes-schemas';
// import { KeysOfLocalStorage } from '../../constants/utils/local-storage/keys-of-local-storage';
import { SignInDto } from '../../types/api/auth/sign-in.dto';
import { Tokens } from '../../types/common/api/user/user-tokens';
import { AuthSliceStoreType } from '../../types/store/slices/auth-slice-store-type';
// import { LocalStorageWorker } from '../../utils/local-storage/local-storage-worker';

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
			// LocalStorageWorker.writeToLocalStorage(
			// 	KeysOfLocalStorage.ACCESS_TOKEN,
			// 	tokens.accessToken,
			// );
			state.accessToken = tokens.accessToken;
		},
		setAccesToken(state, action: PayloadAction<Tokens>) {
			state.accessToken = action.payload.accessToken;
			// LocalStorageWorker.writeToLocalStorage(
			// 	KeysOfLocalStorage.ACCESS_TOKEN,
			// 	action.payload.accessToken,
			// );
		},
		removeCredentials(state) {
			state.user = null;
			state.accessToken = null;
			// LocalStorageWorker.removeItem(KeysOfLocalStorage.ACCESS_TOKEN);
		},
	},
});

export const { setAccesToken, setCredentials, removeCredentials } =
	authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectIsAuthenticated = (state: RootState) =>
	!!state.auth.user && state.auth.accessToken;

export const selectRoutesSchemaByUserRole = (state: RootState) => {
	const role = (state?.auth?.user?.roles[0].value ?? Roles.GUEST) as Roles;

	return rolestRoutes[role];
};

export const authReducer = authSlice.reducer;
