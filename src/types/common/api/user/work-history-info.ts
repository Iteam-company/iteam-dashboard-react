import { Project } from './project';
import { Technology } from './technology';

export interface workHistoryInfo {
	id: number;
	project: Project;
	technologies: Array<Technology>;
}
