import { Box, FormControl, Modal } from '@mui/material';
import { FC } from 'react';
import { useSignUpMutation } from '../../../../api/auth';
import { useNotifySnackbar } from '../../../../hooks/snackbar/use-notify-snackbar';
import { AddButton } from '../mocked/modal-buttons/add';
import { CloseButton } from '../mocked/modal-buttons/close';
import * as Yup from 'yup';
import { Error as ApiError } from '../../../../types/common/api/error';
import { useFormik } from 'formik';
import { User } from '../../../../types/common/api/user';

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
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
	user: User;
};

export const EditUserModal: FC<Props> = ({
	open,
	handleOpen,
	handleClose,
	user,
}) => {
	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Box sx={{ textAlign: 'center' }}>
						<Box sx={{ display: 'inline-block', mr: 2 }}>
							<AddButton text='edit user' />
						</Box>
						<CloseButton handleClose={handleClose} />
					</Box>
				</Box>
			</Modal>
		</>
	);
};
