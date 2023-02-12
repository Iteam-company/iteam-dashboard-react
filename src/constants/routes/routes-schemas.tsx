import { element } from 'prop-types';
import React from 'react';
import { RouteObject } from 'react-router-dom';
import { ForgotPassword } from '../../ui/layouts/authorization/forgot-password';
import { SignIn } from '../../ui/layouts/authorization/sign-in';
import { SignUp } from '../../ui/layouts/authorization/sign-up';
import { ManagerDashboard } from '../../ui/layouts/dashboards/manager-dashboard';
import { AuthGuard } from '../../ui/utils/auth-guard';
import { GuestGuard } from '../../ui/utils/guest-guard';
import { UserPage } from '../../ui/views/user/user-summary';
import { Roles } from '../roles';
import { Routes } from './routes';

const commonRoutes: Array<RouteObject> = [
	{
		path: `${Routes.ROOT_PATH}/${Routes.SIGN_IN}`,
		element: (
			<GuestGuard>
				<SignIn />
			</GuestGuard>
		),
	},
	{
		path: `${Routes.ROOT_PATH}/${Routes.SIGN_UP}`,
		element: (
			<GuestGuard>
				<SignUp />
			</GuestGuard>
		),
	},
	{
		path: `${Routes.ROOT_PATH}/${Routes.FORGOT_PASSWORD}`,
		element: (
			<GuestGuard>
				<ForgotPassword />
			</GuestGuard>
		),
	},
	// for developing we use there mocked routes to display components
	{
		path: `${Routes.ROOT_PATH}/${Routes.DEVELOP_UI_ROUTE}`,
		element: <UserPage />,
	},
];

export const rolestRoutes: { [key in Roles]: Array<RouteObject> } = {
	[Roles.ADMIN]: [
		...commonRoutes,
		{
			path: Routes.ROOT_PATH,
			element: (
				<AuthGuard>
					<ManagerDashboard />
				</AuthGuard>
			),
		},
	],
	[Roles.DEVELOPER]: [
		...commonRoutes,
		{
			path: Routes.ROOT_PATH,
			element: (
				<AuthGuard>
					<ManagerDashboard />
				</AuthGuard>
			),
		},
	],
	[Roles.GUEST]: [
		...commonRoutes,
		{
			path: Routes.ROOT_PATH,
			element: (
				<AuthGuard>
					<ManagerDashboard />
				</AuthGuard>
			),
		},
	],
};
