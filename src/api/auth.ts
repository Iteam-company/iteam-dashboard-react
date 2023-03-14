import { baseApiService } from './base-query';
import { AUTH_ENDPOINTS } from '../constants/api/auth-endpoints-urls/auth-endpoints';
import { SignInDto as ClientSignInDto } from '../types/client/auth/sign-in.dto';
import { SignInDto as ApiSignInDto } from '../types/api/auth/sign-in.dto';
import { SignUpDto } from '../types/client/auth/sign-up.dto';

export const authAPIService = baseApiService.injectEndpoints({
	endpoints: (builder) => ({
		signIn: builder.mutation<ApiSignInDto, ClientSignInDto>({
			query: (credentials) => ({
				url: AUTH_ENDPOINTS.SIGN_IN,
				method: 'POST',
				body: credentials,
			}),
		}),
		signUp: builder.mutation({
			query: (credentials: SignUpDto) => ({
				url: AUTH_ENDPOINTS.SIGN_UP,
				method: 'POST',
				body: credentials,
			}),
			invalidatesTags: ['Users'],
		}),
		refreshAccesToken: builder.mutation({
			query: () => ({
				url: AUTH_ENDPOINTS.REFRESH,
				method: 'POST',
			}),
		}),
		signOut: builder.mutation({
			query: () => ({
				url: AUTH_ENDPOINTS.SIGN_OUT,
				method: 'POST',
			}),
		}),
	}),
});

export const {
	useSignInMutation,
	useRefreshAccesTokenMutation,
	useSignUpMutation,
	useSignOutMutation,
} = authAPIService;
