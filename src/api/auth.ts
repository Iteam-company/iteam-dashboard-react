import { baseApiService } from './base-query';
import { AUTH_ENDPOINTS } from './auth-endpoints/auth-endpoints';
import { LoginCredentials } from '../types/auth/login-credentials';
import { RegistrationCredentials } from '../types/auth/sign-up-credentials';

export const authAPIService = baseApiService.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials: LoginCredentials) => ({
				url: AUTH_ENDPOINTS.SIGN_IN,
				method: 'POST',
				body: credentials,
			}),
		}),
		registration: builder.mutation({
			query: (credentials: RegistrationCredentials) => ({
				url: AUTH_ENDPOINTS.SIGN_UP,
				method: 'POST',
				body: credentials,
			}),
		}),
		refreshAccesToken: builder.mutation({
			query: () => ({
				url: AUTH_ENDPOINTS.REGENERATE,
				method: 'POST',
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: AUTH_ENDPOINTS.SIGN_DOWN,
				method: 'POST', ////WAIT FOR ENDPOINT
			}),
		}),
		getUsers: builder.query({
			query: () => ({
				url: '/user'
			})
		}),
	}),
});

export const { useLoginMutation, useRefreshAccesTokenMutation, useRegistrationMutation, useLogoutMutation, useGetUsersQuery } =
	authAPIService;
