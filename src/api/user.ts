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
	}),
});

export const { useCreateUserMutation } = userApiService;
