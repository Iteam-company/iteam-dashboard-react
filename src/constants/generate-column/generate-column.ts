import { User } from '../../types/common/api/user';

export const columns = [
	{
		generateColumn: (user: User) => user?.name || '',
		title: 'name',
	},
	{
		generateColumn: (user: User) => user?.surname || '',
		title: 'surname',
	},
	{
		generateColumn: (user: User) => user?.city || '',
		title: 'city',
	},

	{
		generateColumn: (user: User) => user?.language || '',
		title: 'language',
	},
	{
		generateColumn: (user: User) => user?.workType?.description || '',
		title: 'work type description',
	},
	{
		generateColumn: (user: User) => user?.techStack?.description || '',
		title: 'tech stack description',
	},
	{
		generateColumn: (user: User) => user?.status,
		title: 'status',
	},
	{
		generateColumn: (user: User) => user.email,
		title: 'email',
	},
	{
		generateColumn: (user: User) => user?.positionDescription,
		title: 'description',
	},
	{
		generateColumn: (user: User) => user?.skills,
		title: 'skills',
	},
	{
		generateColumn: (user: User) => user.experience,
		title: 'experience',
	},
];
