import { User } from '../../../types/common/api/user';
import { UserTableSettings } from '../../../ui/admin/components/view/users/users-table-settings';
import { ButtonDelete } from '../../../ui/components/common/buttons/delete';
import { ButtonEdit } from '../../../ui/components/common/buttons/edit';
import { UserCv } from '../../../ui/components/common/cv/user-cv';
import { ArchiveUserModal } from '../../../ui/components/common/modals/archive-user';
import { EditUserModal } from '../../../ui/components/common/modals/edit-user';
import { Projects } from '../../../ui/components/common/projects-field/projects';

export const columns = [
	{
		generateColumn: (user: User) => {
			if (user.name && user.surname) {
				return `${user.name} ${user.surname}`;
			}

			if (user.name) {
				return `${user.name} N/A`;
			}

			if (user.surname) {
				return `N/A ${user.surname}`;
			}

			return 'N/A';
		},
		title: 'Name, Surname',
	},
	{
		generateColumn: (user: User) => user.email,
		title: 'Email',
	},
	{
		generateColumn: (user: User) => user.status ?? 'N/A',
		title: 'Status',
	},
	{
		generateColumn: (user: User) => (
			<Projects leadingInProjects={user.leadingInProjects} />
		),
		title: 'Projects',
	},
	{
		generateColumn: (user: User) => <UserCv cv={user.cv} />,
		title: 'CV',
	},
	{
		generateColumn: (user: User) => (
			<UserTableSettings
				ButtonEdit={
					<ButtonEdit text='Edit' modal={<EditUserModal user={user} />} />
				}
				ButtonDelete={
					<ButtonDelete
						text='Archive'
						modal={<ArchiveUserModal id={user.id} />}
					/>
				}
			/>
		),
		title: 'Settings',
	},
];
