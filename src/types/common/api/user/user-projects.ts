import { Technology } from './user-technology';

export interface Projects {
	id: number;
	name: string;
	description: string;
	technologies: Array<Technology>;
}
