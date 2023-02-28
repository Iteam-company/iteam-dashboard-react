import { Projects } from './user-projects';

export interface Client {
	id: number;
	name: string;
	link: string;
	communicationType: string;
	projects: Array<Projects>;
}
