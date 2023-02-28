import { Projects } from './user-projects';

export interface Attachments {
	id: number;
	comment: string;
	fileId: number;
	file: File;
	publisherId: number;
	publisher: string;
	userId: number;
	user: string;
	projectId: number;
	project: Projects;
}
