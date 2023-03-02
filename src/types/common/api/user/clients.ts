import { Project } from './project';

export interface Client {
	id: number;
	name: string;
	link: string;
	communicationType: string;
	projects: Array<Project>;
}
