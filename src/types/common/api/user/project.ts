import { Attachment } from './attachment';
import { Technology } from './technology';
import { WorkHistory } from './work-history';

export interface Project {
	id: number;
	name: string;
	description: string;
	teamSize: string;
	technologies: Array<Technology>;
	ourCompanyResponsibility: string;
	pricingModel: string;
	averageHoursPerMonth: number;
	hourlyRate: number;
	fixedPrice: number;
	userId: number;
	startDate: string;
	endDate: string;
	endReason: string | null;
	status: string;
	clientId: null | number;
	projectDeploymentStatus: string;
	projectLink: string;
	demoCredentialsLogin: string;
	demoCredentialsPassword: string;
	createdAt: string;
	updatedAt: string;
	client: string | null;
	attachedAttachments: Array<Attachment>;
	workHistories: Array<WorkHistory>;
}
