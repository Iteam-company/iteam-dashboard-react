import {
	BaseQueryFn,
	createApi,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError,
	FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { RequestHeaders } from '../constants/api/request-headers';
import { StatusCodes } from '../constants/api/status-codes';
import { apiURL as baseUrl } from '../constants/common/env';
import { RootState } from '../store';
import { removeCredentials, setCredentials } from '../store/slices/auth-slice';
import { AUTH_ENDPOINTS_URLS } from '../constants/api/auth-endpoints-urls';
import { SignInDto as ApiSignInDto } from '../types/api/auth/sign-in.dto';

const baseQuery = fetchBaseQuery({
	baseUrl,
	credentials: 'include',
	prepareHeaders: (headers, api) => {
		const { accessToken } = (api.getState() as RootState).auth;

		if (accessToken) {
			headers.set(RequestHeaders.AUTHORIZATION, `Bearer ${accessToken}`);
		}

		return headers;
	},
});

export const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError,
	// eslint-disable-next-line @typescript-eslint/ban-types
	{},
	FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
	let originalResponse = await baseQuery(args, api, extraOptions);

	if (originalResponse.error?.status === StatusCodes.UNAUHTORIZED) {
		const refreshAccesResponse = await baseQuery(
			{ method: 'POST', url: AUTH_ENDPOINTS_URLS.REFRESH },
			api,
			extraOptions,
		);

		if (refreshAccesResponse.data) {
			api.dispatch(setCredentials(refreshAccesResponse.data as ApiSignInDto));

			originalResponse = await baseQuery(args, api, extraOptions);
			if (originalResponse.error?.status === StatusCodes.UNAUHTORIZED) {
				api.dispatch(removeCredentials);
			}
		} else {
			api.dispatch(removeCredentials);
		}
	}

	return originalResponse;
};

export const baseApiService = createApi({
	reducerPath: 'api',
	tagTypes: ['User', 'Users'],
	baseQuery: baseQueryWithReauth,
	endpoints: () => ({}),
});
