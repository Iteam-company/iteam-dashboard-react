import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { DeleteUserModal } from '../delete-user-modal';

type Props = {
	id: number;
};

export const ButtonDelete: FC<Props> = ({ id }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => setOpen(false);
	return (
		<>
			<Box sx={{ cursor: 'pointer' }} onClick={handleOpen}>
				<DeleteOutlineOutlinedIcon />
			</Box>
			<DeleteUserModal open={open} handleClose={handleClose} id={id} />
		</>
	);
};
