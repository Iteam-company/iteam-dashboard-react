import { Attachment } from './attachment';
import { Cv } from './cv';
import { EducationInfo } from './education-info';
import { Project } from './project';
import { Status } from './status';
import { Technology } from './technology';
import { WorkType } from './work-type';
import { WorkHistory } from './work-history';
import { Token } from './token';
import { Role } from './role';

export interface User {
	id: number;
	email: string;
	password: string;
	name: null | string;
	surname: null | string;
	positionDescription: null | string;
	language: null | string;
	endReason: null | string;
	avatarUrl: null | string;
	phone: null | string;
	city: null | string;
	salary: number;
	address: null | string;
	skills: null | string;
	experience: null | string;
	isBanned: boolean;
	banReason: null | string;
	birthday: null | string;
	cvId: null | number;
	cv: null | Cv;
	startDate: null | string;
	endDate: null | string;
	workTypeId: string | null;
	workType: null | WorkType;
	leadingInProjects: Array<Project>;
	roles: null | Role;
	participatingInProjects: Array<Project>;
	attachedAttachments: Attachment;
	publishedAttachments: Attachment;
	techStack: null | Technology;
	status: Status;
	educationInfo: Array<EducationInfo>;
	upwork: null | string;
	github: null | string;
	linkedin: null | string;
	telegramTag: null | string;
	individualEntrepreneurName: null | string;
	individualEntrepreneurAddress: null | string;
	individualEntrepreneurIndividualTaxNumber: null | number;
	individualEntrepreneurBankAccounNumber: null | string;
	individualEntrepreneurBankName: null | string;
	individualEntrepreneurBankCode: null | number;
	individualEntrepreneurBeneficiaryBank: null | string;
	individualEntrepreneurSwiftCode: null | string;
	workHistory: WorkHistory[];
	defaultCoverLetter: null | string;
	createdAt: string;
	updatedAt: string;
	token: Token;
}
