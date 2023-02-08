import React from 'react';
import { RouteObject } from 'react-router-dom';
import { ForgotPassword } from '../../ui/components/authorization/forgot-password';
import { SignIn } from '../../ui/components/authorization/sign-in';
import { SignUp } from '../../ui/components/authorization/sign-up';
import { UserPage } from '../../ui/components/userPage/user-page';
import { ManagerDashboard } from '../../ui/layouts/dashboards/manager-dashboard';
import { AuthGuard } from '../../ui/utils/auth/auth-guard';
import { Routes } from './routes';

export const routesSchema: Array<RouteObject> = [
	{
		path: `${Routes.ROOT_PATH}/${Routes.SIGN_IN}`,
		element: <SignIn />,
	},
	{
		path: `${Routes.ROOT_PATH}/${Routes.SIGN_UP}`,
		element: <SignUp />,
	},
	{
		path: Routes.ROOT_PATH,
		element: (
			<AuthGuard>
				<ManagerDashboard />
			</AuthGuard>
		),
	},
	{
		path: `${Routes.ROOT_PATH}/${Routes.FORGOT_PASS}`,
		element: <ForgotPassword />,
	},
	{
		path: `${Routes.ROOT_PATH}/${Routes.USER_PAGE}`,
		element: <UserPage />
	}
];
