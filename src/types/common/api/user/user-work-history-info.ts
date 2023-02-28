import { Projects } from './user-projects';
import { Technology } from './user-technology';

export interface workHistoryInfo {
	id: number;
	project: Projects;
	technologies: Technology;
}
