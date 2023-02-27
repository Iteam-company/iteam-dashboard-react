import { Outlet, RouteObject } from 'react-router-dom';
import { Orders } from '../../ui/components/mocked/orders';
import { ForgotPassword } from '../../ui/layouts/authorization/forgot-password';
import { SignIn } from '../../ui/layouts/authorization/sign-in';
import { SignUp } from '../../ui/layouts/authorization/sign-up';
import { ManagerDashboard } from '../../ui/layouts/dashboards/manager-dashboard';
import { AuthGuard } from '../../ui/utils/auth-guard';
import { GuestGuard } from '../../ui/utils/guest-guard';
import Default from '../../ui/views/default';
import { Integration } from '../../ui/views/integrations/integrations';
import { Reports } from '../../ui/views/reports/reports';
import { UserPage } from '../../ui/views/user/user-summary';
import { UsersTable } from '../../ui/views/users/users-table';
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
			children: [
				{
					path: Routes.ROOT_PATH,
					element: <Default />,
				},
				{
					path: Routes.ORDERS,
					element: <Outlet />,
				},
				{
					path: Routes.USERS,
					element: <Outlet />,
				},
				{
					path: Routes.REPORTS,
					element: <Outlet />,
				},
				{
					path: Routes.INTEGRATIONS,
					element: <Outlet />,
				},
			],
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
			children: [
				{
					path: Routes.ROOT_PATH,
					element: <Default />,
				},
				{
					path: Routes.ORDERS,
					element: <Orders />,
				},
				{
					path: Routes.USERS,
					element: <UserPage />,
				},
				{
					path: Routes.REPORTS,
					element: <Reports />,
				},
				{
					path: Routes.INTEGRATIONS,
					element: <Integration />,
				},
				{
					path: Routes.USER_TABLE,
					element: <UsersTable />,
				},
			],
		},
	],
};
