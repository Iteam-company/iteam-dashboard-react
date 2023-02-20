import { USERS_ENDPOINTS } from '../constants/api/users-endpoints-urls/users-endpoints';
import { baseApiService } from './base-query';

export const usersApiService = baseApiService.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: (credentials) => ({
				url: USERS_ENDPOINTS.GET_ALL_USERS,
				body: credentials,
			}),
		}),
	}),
});

export const { useGetAllUsersQuery } = usersApiService;
