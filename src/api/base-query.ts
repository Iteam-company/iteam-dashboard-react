import {
	BaseQueryFn,
	createApi,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError,
	FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { ApiEndpoints } from '../constants/api/api-endpoints';
import { RequestHeaders } from '../constants/api/request-headers';
import { StatusCodes } from '../constants/api/status-codes';
import { apiURL as baseUrl } from '../constants/env';
import { RootState } from '../store';
import { removeCredentials, setAccesToken } from '../store/slices/auth-slice';

const baseQuery = fetchBaseQuery({
	baseUrl,
	credentials: 'include',
	prepareHeaders: (headers, api) => {
		const { accessToken } = (api.getState() as RootState).authReducer;

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
			ApiEndpoints.REFRESH,
			api,
			extraOptions,
		);

		if (refreshAccesResponse.data) {
			api.dispatch(setAccesToken((refreshAccesResponse.data as any).token));

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
	tagTypes: ['User'],
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({}),
});