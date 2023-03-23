import { Box, Modal } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNotifySnackbar } from '../../../../../hooks/snackbar/use-notify-snackbar';
import { ModalButton } from '../../buttons/modals-button';
import * as Yup from 'yup';
import { Error as ApiError } from '../../../../../types/common/api/error';
import { useFormik } from 'formik';
import { User } from '../../../../../types/common/api/user';
import {
	useUpdateUserMutation,
	useUploadUserCVMutation,
} from '../../../../../api/user';
import { NameTextField } from '../../modal-textfields/name-text-field';
import { SurnameTextField } from '../../modal-textfields/surname-text-fields';
import { FileUpload } from '../../file-upload';
import { style } from '../../../../../styles/modal-style';
import CloseIcon from '@mui/icons-material/Close';
import { Loader } from '../../loader';
type Props = {
	open?: boolean;
	handleOpen?: () => void;
	handleClose?: () => void;
	user: User;
};

export const EditUserModal: FC<Props> = ({
	open,
	handleClose,
	user,
}) => {
	const [data, { isLoading: isLoadingCv }] = useUploadUserCVMutation();
	const [update, { isLoading }] = useUpdateUserMutation();
	const [file, setFile] = useState<File | null>(null);

	const { showSnackbar } = useNotifySnackbar();
	const formik = useFormik({
		initialValues: {
			name: user.name || '',
			surname: user.surname || '',
			id: user.id,
		},
		onSubmit: async (data, { resetForm }) => {
			const { id, name, surname } = data;
			if (name === user.name && surname === user.surname) {
				showSnackbar('nothing changed', 'error');
				return;
			}

			try {
				const response = await update({ id, name, surname }).unwrap();
				showSnackbar('successfully updated', 'success');
				resetForm({ values: { name: '', surname: '', id } });
				if (handleClose) {
					handleClose();
				}
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
		validateOnBlur: true,
	});

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setFile(event.target.files[0]);
		}
		return;
	};

	const removeFile = () => {
		setFile(null);
	};
	function handleUploadClick() {
		if (user && file && handleClose) {
			const formData = new FormData();
			formData.append('file', file);
			formData.append('userId', user.id.toString());
			data(formData);
			setFile(null);
			handleClose();
		}
		return;
	}

	const { errors, touched, values, handleChange, handleSubmit } = formik;
	return (
		<>
			<Loader isLoading={isLoadingCv} />
			<Modal
				open={open || false}
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
						<FileUpload
							file={file}
							handleFileUpload={handleFileUpload}
							removeFile={removeFile}
						/>
						<Box sx={{ textAlign: 'center' }}>
							<Box sx={{ display: 'inline-block', mr: 2 }}>
								<ModalButton
									text='edit user'
									handleClick={handleUploadClick}
									loading={isLoading}
								/>
							</Box>
							<ModalButton
								text='Close'
								handleClick={handleClose}
								icon={<CloseIcon />}
							/>
						</Box>
					</Box>
				</form>
			</Modal>
		</>
	);
};
