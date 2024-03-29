import { EMAIL_ENDPOINTS_URLS } from '../constants/api/email-endpoints-urls';
import { User } from '../types/common/api/user';
import { baseApiService } from './base-query';

export const authAPIService = baseApiService.injectEndpoints({
	endpoints: (builder) => ({
		addEmailToWhiteList: builder.mutation<Partial<User>, Pick<User, 'email'>>({
			query: (email) => ({
				url: EMAIL_ENDPOINTS_URLS.ALLOWED_REGISTRATION_EMAIL,
				method: 'POST',
				body: email,
			}),
		}),
		deleteEmailFromWhiteList: builder.mutation<string, void>({
			query: (id) => ({
				url: `${EMAIL_ENDPOINTS_URLS.ALLOWED_REGISTRATION_EMAIL}/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useAddEmailToWhiteListMutation,
	useDeleteEmailFromWhiteListMutation,
} = authAPIService;
