import { User } from '../../../types/common/api/user';

export const columns = [
	{
		generateColumn: (user: User) => user?.name ?? 'empty',
		title: 'name',
	},
	{
		generateColumn: (user: User) => user?.surname ?? 'empty',
		title: 'surname',
	},
	{
		generateColumn: (user: User) => user?.city ?? 'empty',
		title: 'city',
	},

	{
		generateColumn: (user: User) => user?.language ?? 'empty',
		title: 'language',
	},
	{
		generateColumn: (user: User) => user?.workType?.description ?? 'empty',
		title: 'work type description',
	},
	{
		generateColumn: (user: User) => user?.techStack?.description ?? 'empty',
		title: 'tech stack description',
	},
	{
		generateColumn: (user: User) => user?.status ?? 'empty',
		title: 'status',
	},
	{
		generateColumn: (user: User) => user.email,
		title: 'email',
	},
	{
		generateColumn: (user: User) => user?.positionDescription ?? 'empty',
		title: 'description',
	},
	{
		generateColumn: (user: User) => user?.skills ?? 'empty',
		title: 'skills',
	},
	{
		generateColumn: (user: User) => user?.experience ?? 'empty',
		title: 'experience',
	},
];
