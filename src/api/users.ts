import { USERS_ENDPOINTS } from '../constants/api/users-endpoints-urls/users-endpoints';
import { UsersResponse } from '../types/admin/users';
import { baseApiService } from './base-query';

export const usersApiService = baseApiService.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsers: builder.query<UsersResponse, void>({
			query: () => {
				//const { pipeType, critery, value, page, limit } = params ?? {};
				const url: string = USERS_ENDPOINTS.USERS;

				//if (pipeType && critery && value) {
				//	url += `?pipe-type=${pipeType}&critery=${critery}&value=${value}`;
				//}
				//if (pipeType && critery && value && page && limit) {
				//	url += `?pipe-type=${pipeType}&critery=${critery}&value=${value}&page=${page}&limit=${limit}`;
				//}
				//if (page && limit) {
				//	url += `?page=${page}&limit=${limit}`;
				//}

				return {
					url,
					method: 'GET',
				};
			},
			providesTags: (response) =>
				response
					? [
						...response.data.map(({ id }) => ({
							type: 'Users' as const,

							id,
						})),
						'Users',
					  ]
					: ['Users'],
		}),
	}),
});

export const { useGetAllUsersQuery } = usersApiService;
