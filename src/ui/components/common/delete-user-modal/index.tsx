import { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 14,
	p: 4,
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
	outline: 'none',
};

type Props = {
	open?: boolean;
	handleClose?: () => void;
};

export const DeleteUserModal: FC<Props> = ({ open = false, handleClose }) => {
	return (
		<>
			<Modal
				keepMounted
				open={open}
				onClose={handleClose}
				aria-labelledby='keep-mounted-modal-title'
				aria-describedby='keep-mounted-modal-description'>
				<Box sx={style}>
					<Typography
						id='keep-mounted-modal-title'
						variant='h6'
						component='h2'
						sx={{ textAlign: 'center' }}>
						Do you really want to delete?
					</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Button
							variant='contained'
							startIcon={<DeleteIcon />}
							sx={{ mr: 2, height: '100%' }}>
							Delete
						</Button>
						<Button
							size='medium'
							variant='contained'
							startIcon={<CloseIcon />}
							onClick={handleClose}
							sx={{ height: '100%' }}>
							Close
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
};
