import { User } from "../../common/api/user";
import { Tokens } from "../../common/api/user/user-tokens";

export interface SignInDto {
	tokens: Tokens;
	user: User;
}
