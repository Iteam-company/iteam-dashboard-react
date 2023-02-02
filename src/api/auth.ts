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
		logout: builder.mutation({
			query: () => ({
				url: AUTH_ENDPOINTS.SIGN_DOWN,
				method: 'POST',
			}),
		}),
	}),
});

export const { useLoginMutation, useLogoutMutation, useRegistrationMutation } =
	authAPIService;
