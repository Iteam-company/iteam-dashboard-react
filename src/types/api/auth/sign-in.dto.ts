import { User } from '../../common/api/user';

export interface SignInDto {
	tokens: { accessToken: string };
	user: User; // there we need type
}
