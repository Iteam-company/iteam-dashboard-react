import { User } from '../../common/api/user';

export interface UsersSliceStoreType {
	allUsers: Array<User> | null;
	filteredUser: Array<User> | null;
}
