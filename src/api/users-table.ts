import { USERS_TABLE_ENDPOINTS } from '../constants/api/users-table-endpoints-urls/users-table-endpoints';
import { User } from '../types/common/api/user';
import { baseApiService } from './base-query';

export const usersApiService = baseApiService.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsers: builder.query<Array<User> | null, void>({
			query: (credentials) => ({
				url: USERS_TABLE_ENDPOINTS.GET_ALL_USERS,
				body: credentials,
			}),
		}),
	}),
});

export const { useGetAllUsersQuery } = usersApiService;
