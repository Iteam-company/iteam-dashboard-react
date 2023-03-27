import { RouteObject } from 'react-router-dom';
import { Roles } from '../../roles';

import { adminRoutesSchema } from '../../../admin/routes-schemas/admin-routes-schema';
import { commonRoutesSchema } from './common-routes-schema';

export const rolesRoutesSchemas: { [key in Roles]: Array<RouteObject> } = {
	[Roles.GUEST]: [...commonRoutesSchema, adminRoutesSchema],
	[Roles.ADMIN]: [],
	[Roles.DEVELOPER]: [],
};
