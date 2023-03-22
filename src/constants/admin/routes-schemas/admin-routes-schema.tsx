import { RouteObject } from 'react-router-dom';
import { AdminDashboard } from '../../../ui/admin/layout/dashboard';
import { Default } from '../../../ui/admin/view/default';
import { Integration } from '../../../ui/admin/view/integrations/integrations';
import { OrdersBox } from '../../../ui/admin/view/orders/orders-box';
import { Reports } from '../../../ui/admin/view/reports/reports';
import { Users } from '../../../ui/admin/view/users';
import { AuthGuard } from '../../../ui/utils/auth-guard';
import { AdminRoutes } from '../admin-routes';
import { CommontRoutes } from '../../common/routes/common-routes';
import { UserSummary } from '../../../ui/admin/view/user/subviews/user-summary';

export const adminRoutesSchema: RouteObject = {
	path: CommontRoutes.ROOT_PATH,
	element: (
		<AuthGuard>
			<AdminDashboard />
		</AuthGuard>
	),
	children: [
		{
			path: CommontRoutes.ROOT_PATH,
			element: <Default />,
		},
		{
			path: AdminRoutes.ORDERS,
			element: <OrdersBox />,
		},
		{
			path: AdminRoutes.USERS,
			element: <Users />,
		},
		{
			path: AdminRoutes.REPORTS,
			element: <Reports />,
		},
		{
			path: AdminRoutes.INTEGRATIONS,
			element: <Integration />,
		},
		{
			path: `${AdminRoutes.USERS}/:id`,
			element: <UserSummary />,
		},
	],
};
