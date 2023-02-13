export interface Roles {
	id: number;
	value: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	UserRole: {
		id: number;
		roleId: number;
		userId: number;
	};
}
