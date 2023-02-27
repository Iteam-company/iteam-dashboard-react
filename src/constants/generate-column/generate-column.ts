import { User } from '../../types/common/api/user';

export const columns = [
	{
		generateColumn(user: User) {
			const { email } = user;
			return email;
		},
		title: 'email',
	},
	{
		generateColumn(user: User) {
			const { updatedAt } = user;
			return updatedAt;
		},
		title: 'updatedAt',
	},
	{
		generateColumn(user: User) {
			const { offerDay } = user;
			return offerDay;
		},
		title: 'offerDay',
	},
	{
		generateColumn(user: User) {
			const { description } = user;
			return description;
		},
		title: 'description'
	},
	{
		generateColumn(user: User) {
			const { salary } = user;
			return salary;
		},
		title: 'salary'
	},
	{
		generateColumn(user: User) {
			const { address } = user;
			return address;
		},
		title: 'address',
	},
	{
		generateColumn(user: User) {
			const { skills } = user;
			return skills;
		},
		title: 'skills',
	},
	{
		generateColumn(user: User) {
			const { experience } = user;
			return experience;
		},
		title: 'experience',
	},
];
