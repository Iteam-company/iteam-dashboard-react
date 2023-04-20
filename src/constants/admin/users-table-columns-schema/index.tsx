import { User } from '../../../types/common/api/user';
import { UserTableSettings } from '../../../ui/admin/components/view/users/users-table-settings';
import { UserCv } from '../../../ui/components/common/cv/user-cv';
import { Projects } from '../../../ui/admin/components/view/users/projects';
import { FullName } from '../../../ui/admin/components/view/users/full-name';
import { UserEmail } from '../../../ui/admin/components/view/users/user-email';
import { UserStatus } from '../../../ui/admin/components/view/users/status';
import { SettingsButton } from '../../../ui/components/common/buttons/settings-button';
import { Status } from '../../../types/common/api/user/status';
import { ArchiveUserModal } from '../../../ui/components/common/modals/archive-user';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { RestoreUserModal } from '../../../ui/components/common/modals/restore-user';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

export const columns = [
	{
		generateColumn: (user: User) => <FullName user={user} />,
		title: 'Full Name',
		id: 1,
	},
	{
		generateColumn: (user: User) => <UserEmail user={user} />,
		title: 'Email',
		id: 2,
	},
	{
		generateColumn: (user: User) => <UserStatus user={user} />,
		title: 'Status',
		id: 3,
	},
	{
		generateColumn: (user: User) => <Projects user={user} />,
		title: 'Projects',
		id: 4,
	},
	{
		generateColumn: (user: User) => <UserCv cv={user.cv || 'N/A'} />,
		title: 'CV',
		id: 5,
	},
	{
		generateColumn: (user: User) => (
			<UserTableSettings
				ButtonEdit={
					<SettingsButton
						icon={<ModeEditOutlinedIcon sx={{ fontSize: 'medium' }} />}
						text='Edit'
						user={user}
					/>
				}
				ButtonDelete={
					user.status === Status.UNARCHIVED ? (
						<SettingsButton
							icon={<ArchiveOutlinedIcon sx={{ fontSize: 'medium' }} />}
							text='Archive'
							modal={<ArchiveUserModal id={user.id} />}
						/>
					) : (
						<SettingsButton
							icon={<UnarchiveOutlinedIcon sx={{ fontSize: 'medium' }} />}
							text='Restore'
							modal={<RestoreUserModal id={user.id} />}
						/>
					)
				}
			/>
		),
		title: 'Settings',
		id: 6,
	},
];
