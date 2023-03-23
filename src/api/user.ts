import { USERS_ENDPOINTS } from '../constants/api/users-endpoints-urls/users-endpoints';
import { User } from '../types/common/api/user';
import { AuthCredentials } from '../types/common/client/auth-credentials';
import { baseApiService } from './base-query';

export interface BanReq {
	userId: number;
	banReason: string;
}

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
		uploadUserCV: builder.mutation<User, FormData>({
			query: (formData) => ({
				url: `${USERS_ENDPOINTS.USERS}${USERS_ENDPOINTS.CV}`,
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['Users'],
		}),
		banUser: builder.mutation<User, BanReq>({
			query: (params: BanReq) => ({
				url: `${USERS_ENDPOINTS.USERS}${USERS_ENDPOINTS.BAN}`,
				method: 'POST',
				body: params,
			}),
			invalidatesTags: ['Users'],
		}),
		getUser: builder.query<User, string | null>({
			query: (id) => ({
				url: `${USERS_ENDPOINTS.USERS}/${id}`,
				method: 'GET',
			}),
		}),
	}),
});

export const {
	useCreateUserMutation,
	useUpdateUserMutation,
	useUploadUserCVMutation,
	useBanUserMutation,
	useGetUserQuery,
} = userApiService;
