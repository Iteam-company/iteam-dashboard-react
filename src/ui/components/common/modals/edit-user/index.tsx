import { Box, Modal } from '@mui/material';
import { FC } from 'react';
import { useNotifySnackbar } from '../../../../../hooks/snackbar/use-notify-snackbar';
import { AddButton } from '../modal-buttons/add';
import { CloseButton } from '../modal-buttons/close';
import * as Yup from 'yup';
import { Error as ApiError } from '../../../../../types/common/api/error';
import { useFormik } from 'formik';
import { User } from '../../../../../types/common/api/user';
import { useUpdateUserMutation } from '../../../../../api/user';
import { NameTextField } from '../modal-textfields/name-text-field';
import { SurnameTextField } from '../modal-textfields/surname-text-fields';
import { Loader } from '../../loader';
import { FileUpload } from '../../file-upload';

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
	const [update, { isLoading }] = useUpdateUserMutation();
	const { showSnackbar } = useNotifySnackbar();
	const formik = useFormik({
		initialValues: {
			name: user.name || '',
			surname: user.surname || '',

			id: user.id,
		},
		onSubmit: async (data) => {
			const { id, name, surname } = data;

			try {
				const response = await update({ id, name, surname }).unwrap();
				showSnackbar('successfully updated', 'success');
				handleClose();
			} catch (error) {
				const typedError = error as ApiError;
				showSnackbar(typedError.data.message, 'error');
			}
		},
		validationSchema: Yup.object().shape({
			name: Yup.string()
				.min(2, 'Name must be at least 2 characters')
				.max(50, 'Name cannot exceed 50 characters'),
			surname: Yup.string()
				.min(2, 'Name must be at least 2 characters')
				.max(50, 'Name cannot exceed 50 characters'),
		}),
		validateOnBlur: false,
	});

	if (isLoading) {
		return <Loader isLoading={isLoading} />;
	}

	const { errors, touched, values, handleChange, handleSubmit } = formik;
	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<form onSubmit={handleSubmit}>
					<Box sx={style}>
						<Box>
							<NameTextField
								name={values.name}
								handleChange={handleChange}
								touched={touched}
								errors={errors}
							/>
						</Box>
						<Box>
							<SurnameTextField
								surname={values.surname}
								handleChange={handleChange}
								touched={touched}
								errors={errors}
							/>
						</Box>
						<FileUpload />
						<Box sx={{ textAlign: 'center' }}>
							<Box sx={{ display: 'inline-block', mr: 2 }}>
								<AddButton text='edit user' />
							</Box>
							<CloseButton handleClose={handleClose} />
						</Box>
					</Box>
				</form>
			</Modal>
		</>
	);
};
