import React from 'react';
import { RouteObject } from 'react-router-dom';
import { SignIn } from '../../ui/components/authorization/sign-in';
import { SignUp } from '../../ui/components/authorization/sign-up';
import { ManagerDashboard } from '../../ui/layouts/dashboards/manager-dashboard';
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
		element: <ManagerDashboard />,
	},
];
