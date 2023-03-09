import { Technology } from './technology';

export interface Project {
	id: number;
	name: string;
	description: string;
	technologies: Array<Technology>;
}
