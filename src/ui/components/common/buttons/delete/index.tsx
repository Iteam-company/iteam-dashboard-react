import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, Tooltip } from '@mui/material';
import { FC, useState, cloneElement } from 'react';

type Props = {
	text?: string;
	modal?: JSX.Element;
};

export const ButtonDelete: FC<Props> = ({ text = 'Delete', modal }) => {
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
			{modal && cloneElement(modal, { open, handleOpen, handleClose })}
		</>
	);
};
