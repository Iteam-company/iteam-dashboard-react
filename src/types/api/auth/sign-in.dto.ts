import { User } from '../../common/api/user/user';

export interface SignInDto {
	tokens: { accessToken: string };
	user: User; // there we need type
}
