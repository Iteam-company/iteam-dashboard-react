import { Box, Tooltip } from '@mui/material';
import { cloneElement, FC, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../../../types/common/api/user';

type Props = {
	user?: User;
	modal?: JSX.Element;
	icon: ReactElement;
	text?: string;
};
export const SettingsButton: FC<Props> = ({ user, modal, icon, text }) => {
	const { id } = user || {};
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const handleOpen = () => {
		if (user) {
			navigate(`${id}`);
		}
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<Box sx={{ cursor: 'pointer' }} onClick={handleOpen}>
				<Tooltip title={text}>{icon}</Tooltip>
			</Box>

			{modal && cloneElement(modal, { open, handleOpen, handleClose })}
		</>
	);
};
