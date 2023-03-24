import { FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useUpdateUserMutation } from '../../../../../api/user';
import { Status } from '../../../../../types/common/api/user/status';
import { style } from '../../../../../styles/modal-style';
import { ModalButton } from '../../buttons/modals-button';
import CloseIcon from '@mui/icons-material/Close';
import { useNotifySnackbar } from '../../../../../hooks/snackbar/use-notify-snackbar';

type Props = {
	open?: boolean;
	handleClose?: () => void;
	id: number;
	text?: string;
};

export const RestoreUserModal: FC<Props> = ({
	open = false,
	handleClose,
	id,
	text = 'Do you really want to restore?',
}) => {
	const [archive, { isLoading, isSuccess }] = useUpdateUserMutation();
	const { showSnackbar } = useNotifySnackbar();
	useEffect(() => {
		if (isSuccess) {
			showSnackbar('successfully restore', 'success');
		}
	}, [isSuccess]);

	const archiveUser = () => {
		const statusArchived = {
			status: Status.UNARCHIVED,
		};
		archive({ id, ...statusArchived });
	};
	if (isSuccess && handleClose) {
		handleClose();
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
						{text}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Box sx={{ mr: 2 }}>
							<ModalButton
								handleClick={archiveUser}
								text={'restore'}
								loading={isLoading}
							/>
						</Box>

						<ModalButton
							handleClick={handleClose}
							text='Close'
							icon={<CloseIcon />}
						/>
					</Box>
				</Box>
			</Modal>
		</>
	);
};