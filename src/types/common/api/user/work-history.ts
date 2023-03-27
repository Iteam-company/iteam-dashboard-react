import { Attachment } from './attachment';

export interface WorkHistory {
	id: number;
	project: string;
	user: string;
	startDate: string;
	endDate: string;
	positionOnProject: string;
	responsibility: string;
	showCaseAttachments: null | Array<Attachment>;
}
