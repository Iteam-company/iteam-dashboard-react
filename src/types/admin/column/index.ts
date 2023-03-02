import { User } from '../../common/api/user';

export interface Column {
	generateColumn: (arg: User) => string;
	title: string;
}
