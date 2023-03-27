import { Project } from './project';
import { Technology } from './technology';

export interface WorkHistoryInfo {
	id: number;
	project: Project;
	technologies: Array<Technology>;
}
