import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box } from '@mui/material';
import { useState } from 'react';
import { DeleteUserModal } from '../delete-user-modal';

export const ButtonDelete = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Box sx={{ cursor: 'pointer' }} onClick={handleOpen}>
				<DeleteOutlineOutlinedIcon />
			</Box>
			<DeleteUserModal open={open} handleClose={handleClose} />
		</>
	);
};
