import { EMAIL_ENDPOINTS } from '../constants/api/email-endpoints-urls/email-endpoints';
import { User } from '../types/common/api/user';
import { baseApiService } from './base-query';

export const authAPIService = baseApiService.injectEndpoints({
	endpoints: (builder) => ({
		addEmailToWhiteList: builder.mutation<Partial<User>, Pick<User, 'email'>>({
			query: (email) => ({
				url: EMAIL_ENDPOINTS.ALLOWED_REGISTRATION_EMAIL,
				method: 'POST',
				body: email,
			}),
		}),
	}),
});

export const { useAddEmailToWhiteListMutation } = authAPIService;
