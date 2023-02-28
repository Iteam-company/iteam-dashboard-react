import { Attachments } from './user-attachments';

export interface workHistory {
	id: number;
	project: string;
	user: string;
	startDate: string;
	endDate: string;
	positionOnProject: string;
	responsibility: string;
	showCaseAttachments: Attachments;
	defaultCoverLetter: string;
}
