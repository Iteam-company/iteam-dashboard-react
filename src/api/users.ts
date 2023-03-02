import { USERS_ENDPOINTS } from '../constants/api/users-endpoints-urls/users-endpoints';
import { User } from '../types/common/api/user';
import { baseApiService } from './base-query';

export const usersApiService = baseApiService.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsers: builder.query<Array<User> | null, void>({
			query: (credentials) => ({
				url: USERS_ENDPOINTS.USERS,
				body: credentials,
			}),
			providesTags: (result) =>
				result
					? [
						...result.map(({ id }) => ({ type: 'Users' as const, id })),

						'Users',
					  ]
					: ['Users'],
		}),
	}),
});

export const { useGetAllUsersQuery } = usersApiService;
