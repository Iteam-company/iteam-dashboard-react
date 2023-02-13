import { Roles } from "./user-roles";
import { Tokens } from "./user-tokens";
import { WorkType } from "./user-work-type";

export interface User {
	tokens: Tokens,
	user: {
		id: number;
		email: string;
		password: string;
		name: null | string;
		surname: null | string;
		avatarUrl: string;
		phone: null | string;
		city: null | string;
		salary: number;
		address: null | string;
		skills: null | string;
		experience: null | string;
		isBanned: boolean;
		banReason: null | string;
		birthday: null | string;
		cv: null | string;
		offerDay: string;
		workTypeId: null | number;
		createdAt: string;
		updatedAt: string;
		workType: null | WorkType;
		roles: null | Roles[];
	};
}
