import { User } from "../../common/api/user";

export interface AuthSliceStoreType {
	user: User | null;
	accessToken: string | null;
}
