import { User } from '.';
export interface Roles {
	id: number;
	value: string;
	description: string;
	users: Array<User> | null;
}
