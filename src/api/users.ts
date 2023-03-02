import { USERS_ENDPOINTS } from '../constants/api/users-endpoints-urls/users-endpoints';
import { UsersResponse } from '../types/common/api/users';
import { baseApiService } from './base-query';

export const usersApiService = baseApiService.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsers: builder.query<UsersResponse | null, void>({
			query: (credentials) => ({
				url: USERS_ENDPOINTS.USERS,
				body: credentials,
			}),
			providesTags: (result) =>
				result?.data
					? [
						...result.data.map(({ id }) => ({ type: 'Users' as const, id })),

						'Users',
					  ]
					: ['Users'],
		}),
	}),
});

export const { useGetAllUsersQuery } = usersApiService;
