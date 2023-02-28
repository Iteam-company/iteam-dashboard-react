import { User } from '.';

export interface Technology {
	id: number;
	title: string;
	description: string;
	officialDocsHref: string;
	icon: string;
	projects: Array<string>;
	users: Array<User>;
}
