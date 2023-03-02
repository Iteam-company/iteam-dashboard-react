import { User } from '.';
import { Project } from './project';

export interface Technology {
	id: number;
	title: string;
	description: string;
	officialDocsHref: string;
	icon: string;
	projects: Array<Project>;
	users: Array<User>;
}
