import { User } from '.';
export interface Role {
	id: number;
	value: string;
	description: string;
	users: Array<User> | null;
}
