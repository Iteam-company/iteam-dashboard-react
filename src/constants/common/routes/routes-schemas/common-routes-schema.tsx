import { RouteObject } from 'react-router-dom';
import { UserSummary } from '../../../../ui/admin/view/user/subviews/user-summary';
import { ForgotPassword } from '../../../../ui/layout/authorization/forgot-password';
import { SignIn } from '../../../../ui/layout/authorization/sign-in';
import { SignUp } from '../../../../ui/layout/authorization/sign-up';
import { GuestGuard } from '../../../../ui/utils/guest-guard';

import { CommontRoutes } from '../common-routes';

export const commonRoutesSchema: Array<RouteObject> = [
	{
		path: `${CommontRoutes.ROOT_PATH}/${CommontRoutes.SIGN_IN}`,
		element: (
			<GuestGuard>
				<SignIn />
			</GuestGuard>
		),
	},
	{
		path: `${CommontRoutes.ROOT_PATH}/${CommontRoutes.SIGN_UP}`,
		element: (
			<GuestGuard>
				<SignUp />
			</GuestGuard>
		),
	},
	{
		path: `${CommontRoutes.ROOT_PATH}/${CommontRoutes.FORGOT_PASSWORD}`,
		element: (
			<GuestGuard>
				<ForgotPassword />
			</GuestGuard>
		),
	},
	{
		path: `${CommontRoutes.ROOT_PATH}/${CommontRoutes.DEVELOP_UI_ROUTE}`,
		element: <UserSummary />,
	},
];
