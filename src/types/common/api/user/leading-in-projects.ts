import { User } from '.';
import { Attachments } from './attachments';
import { Client } from './clients';
import { EducationInfo } from './education';
import { Project } from './project';
import { Technology } from './technology';
import { workHistory } from './work-history';

export interface leadingInProject {
	id: number;
	name: string;
	description: string;
	technologies: Technology;
	teamSize: string;
	ourCompanyResponsibility: string;
	pricingModel: string;
	averageHoursPerMonth: number;
	hourlyRate: number;
	fixedPrice: number;
	mainParticipant: string;
	secondaryParticipants: Array<User>;
	startDate: string;
	endDate: string;
	endReason: string;
	status: string;
	client: Client;
	projectDeploymentStatus: string;
	projectLink: string;
	demoCredentialsLogin: string;
	demoCredentialsPassword: string;
	attachedAttachments: Array<Attachments> | null;
	workHistories: workHistory;
	participatingInProjects: Array<Project>;
	publishedAttachments: Array<User>;
	techStack: Array<Technology>;
	educationInfo: Array<EducationInfo>;
}
