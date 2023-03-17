import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, Tooltip } from '@mui/material';
import { FC, useState } from 'react';
import { ArchiveUserModal } from '../../modals/archive-user';

type Props = {
	id: number;
	text?: string;
};

export const ButtonDelete: FC<Props> = ({ id, text = 'Delete' }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => setOpen(false);
	return (
		<>
			<Box sx={{ cursor: 'pointer' }} onClick={handleOpen}>
				<Tooltip title={text}>
					<DeleteOutlineOutlinedIcon />
				</Tooltip>
			</Box>
			<ArchiveUserModal open={open} handleClose={handleClose} id={id} />
		</>
	);
};
