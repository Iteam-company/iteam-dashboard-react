import { USERS_ENDPOINTS } from '../constants/api/users-endpoints-urls/users-endpoints';
import { User } from '../types/common/api/user';
import { AuthCredentials } from '../types/common/client/auth-credentials';
import { baseApiService } from './base-query';

export const userApiService = baseApiService.injectEndpoints({
	endpoints: (builder) => ({
		createUser: builder.mutation<User, AuthCredentials>({
			query: (credentials: AuthCredentials) => ({
				url: USERS_ENDPOINTS.USERS,
				method: 'POST',
				body: credentials,
			}),
			invalidatesTags: ['Users'],
		}),
		updateUser: builder.mutation<User, Pick<User, 'id'> & Partial<User>>({
			query: ({ id, ...patch }) => ({
				url: `${USERS_ENDPOINTS.USERS}/${id}`,
				method: 'PATCH',
				body: patch,
			}),
			invalidatesTags: ['Users'],
		}),
	}),
});

export const { useCreateUserMutation, useUpdateUserMutation } = userApiService;
