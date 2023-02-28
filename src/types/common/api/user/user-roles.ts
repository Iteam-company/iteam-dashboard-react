export interface UserRole {
	id: number;
	roleId: number;
	userid: number;
}

export interface Roles {
	id: number;
	value: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	UserRole: UserRole;
}
