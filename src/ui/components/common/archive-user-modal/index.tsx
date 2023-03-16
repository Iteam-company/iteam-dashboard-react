import { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useUpdateUserMutation } from '../../../../api/user';
import { Status } from '../../../../types/common/api/user/status';
import { Loader } from '../loader';
import { CloseButton } from '../mocked/modal-buttons/close';
import { DeleteButton } from '../mocked/modal-buttons/delete';

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
	id: number;
};

export const ArchiveUserModal: FC<Props> = ({
	open = false,
	handleClose,
	id,
}) => {
	const [archive, { isLoading }] = useUpdateUserMutation();

	const archiveUser = () => {
		const statusArchived = {
			status: Status.ARCHIVED,
		};
		archive({ id, ...statusArchived });
	};
	if (isLoading && handleClose) {
		handleClose();
		return <Loader isLoading={isLoading} />;
	}
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
						<DeleteButton handleDelete={archiveUser} text={'archive'}/>
						<CloseButton handleClose={handleClose} />
					</Box>
				</Box>
			</Modal>
		</>
	);
};
