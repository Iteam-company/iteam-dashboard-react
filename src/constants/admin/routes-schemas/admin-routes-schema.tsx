import { RouteObject } from 'react-router-dom';
import { AdminDashboard } from '../../../ui/admin/layout/dashboard';
import { Default } from '../../../ui/admin/view/default';
import { Integration } from '../../../ui/admin/view/integrations/integrations';
import { Reports } from '../../../ui/admin/view/reports/reports';
import { Users } from '../../../ui/admin/view/users';
import { AuthGuard } from '../../../ui/utils/auth-guard';
import { AdminRoutes } from '../admin-routes';
import { CommontRoutes } from '../../common/routes/common-routes';
import { UserSummary } from '../../../ui/admin/view/user/subviews/user-summary';
import { commonRoutesSchema } from '../../common/routes/routes-schemas/common-routes-schema';
import { AddUserWrapper } from '../../../ui/admin/view/user/subviews/add-user-wrapper';
import { Projects } from '../../../ui/admin/view/projects';
import { Orders } from '../../../ui/components/common/mocked/orders';
import { ProjectWrapper } from '../../../ui/admin/view/project/wrapper';

export const adminRoutesSchema: RouteObject = {
	path: CommontRoutes.ROOT_PATH,
	element: (
		<AuthGuard>
			<AdminDashboard />
		</AuthGuard>
	),
	children: [
		...commonRoutesSchema,
		{
			path: CommontRoutes.ROOT_PATH,
			element: <Default />,
		},
		{
			path: AdminRoutes.ORDERS,
			element: <Orders />,
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
		{
			path: AdminRoutes.ADD_USER,
			element: <AddUserWrapper />,
		},
		{
			path: AdminRoutes.PROJECTS,
			element: <Projects />,
		},
		{
			path: `${AdminRoutes.PROJECTS}/:id`,
			element: <ProjectWrapper />,
		},
	],
};
