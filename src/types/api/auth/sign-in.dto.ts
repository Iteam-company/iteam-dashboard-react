import { User } from '../../common/api/user';
import { Tokens } from '../../client/auth/tokens';

export interface SignInDto {
	tokens: Tokens;
	user: User;
}
