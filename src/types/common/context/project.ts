import { Project } from '../api/user/project';

export interface ProjectContext {
	query: Partial<Project>;
	handleProjectInfo: (
		event: React.ChangeEvent<HTMLInputElement>,
		name: keyof Project,
	) => void;
	handleProjectDateInfo: (date: Date | null, name: keyof Project) => void;
}
