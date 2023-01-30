import { baseApiService } from "./base-query";
import { AUTH_ENDPOINTS } from './auth-endpoints/auth-endpoints';
import { LoginCredentials } from './login-credentials';


export const authAPIService = baseApiService.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: LoginCredentials) => ({
        url: AUTH_ENDPOINTS.SIGN_IN,
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: AUTH_ENDPOINTS.SIGN_DOWN ,
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authAPIService;
