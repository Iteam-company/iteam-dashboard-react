import { EducationInfo } from '../api/user/education-info';

export interface EducationContext {
	query: Partial<EducationInfo>;
	handleUnivercityInfo: (
		event: React.ChangeEvent<HTMLInputElement>,
		name: keyof EducationInfo,
	) => void;

	handleUnivercityDateInfo: (
		date: Date | null,
		name: keyof EducationInfo,
	) => void;
}
