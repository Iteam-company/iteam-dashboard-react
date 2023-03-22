import { User } from '../../../types/common/api/user';
import { UserTableSettings } from '../../../ui/admin/components/view/users/users-table-settings';
import { UserCv } from '../../../ui/components/common/cv/user-cv';
import { Projects } from '../../../ui/admin/components/view/users/projects';
import { UserNameSurname } from '../../../ui/admin/components/view/users/name-surname';
import { UserEmail } from '../../../ui/admin/components/view/users/user-email';
import { UserStatus } from '../../../ui/admin/components/view/users/status';
import { SettingsButton } from '../../../ui/components/common/buttons/settings-button';
import { Status } from '../../../types/common/api/user/status';
import SettingsIcon from '@mui/icons-material/Settings';
import { EditUserModal } from '../../../ui/components/common/modals/edit-user';
import { ArchiveUserModal } from '../../../ui/components/common/modals/archive-user';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import RestoreIcon from '@mui/icons-material/Restore';
import { RestoreUserModal } from '../../../ui/components/common/modals/restore-user';

export const columns = [
	{
		generateColumn: (user: User) => <UserNameSurname user={user} />,
		title: 'Name, Surname',
	},
	{
		generateColumn: (user: User) => <UserEmail user={user} />,
		title: 'Email',
	},
	{
		generateColumn: (user: User) => <UserStatus user={user} />,
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
					<SettingsButton
						user={user}
						icon={<SettingsIcon />}
						text='Edit'
						modal={<EditUserModal user={user} />}
					/>
				}
				ButtonDelete={
					user.status === Status.UNARCHIVED ? (
						<SettingsButton
							user={user}
							icon={<ArchiveOutlinedIcon />}
							text='Archive'
							modal={<ArchiveUserModal id={user.id} />}
						/>
					) : (
						<SettingsButton
							user={user}
							icon={<RestoreIcon />}
							text='Restore'
							modal={<RestoreUserModal id={user.id} />}
						/>
					)
				}
			/>
		),
		title: 'Settings',
	},
];
