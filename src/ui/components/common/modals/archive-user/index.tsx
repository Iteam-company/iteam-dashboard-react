import { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useUpdateUserMutation } from '../../../../../api/user';
import { Status } from '../../../../../types/common/api/user/status';
import { Loader } from '../../loader';
import { CloseButton } from '../modal-buttons/close';
import { DeleteButton } from '../modal-buttons/delete';
import { style } from '../../../../../styles/modal-style';

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
						<DeleteButton handleDelete={archiveUser} text={'archive'} />
						<CloseButton handleClose={handleClose} />
					</Box>
				</Box>
			</Modal>
		</>
	);
};
