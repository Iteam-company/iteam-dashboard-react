import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Tooltip } from '@mui/material';
import { FC, useState, cloneElement } from 'react';
import { User } from '../../../../../types/common/api/user';

type Props = {
	text?: string;
	modal: JSX.Element;
	user?: User;
};
export const ButtonEdit: FC<Props> = ({ text = 'Edit', modal }) => {
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

			{modal && cloneElement(modal, { open, handleOpen, handleClose })}
		</>
	);
};
