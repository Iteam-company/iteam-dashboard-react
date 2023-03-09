import { User } from '../../common/api/user';
import { UsersResponseLinks } from './links';
import { UsersResponseMeta } from './meta';

export interface UsersResponse {
	data: Array<User>;
	links: UsersResponseLinks;
	meta: UsersResponseMeta;
}
