import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Tooltip } from '@mui/material';
import { FC, useState } from 'react';
import { User } from '../../../../../types/common/api/user';
import { EditUserModal } from '../../edit-user-modal';

type Props = {
	user: User;
	text?: string;
};
export const ButtonEdit: FC<Props> = ({ user, text = 'Edit' }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<Box sx={{ cursor: 'pointer' }} onClick={handleOpen}>
				<Tooltip title={text}>
					<SettingsIcon />
				</Tooltip>
			</Box>

			<EditUserModal
				user={user}
				open={open}
				handleOpen={handleOpen}
				handleClose={handleClose}
			/>
		</>
	);
};
