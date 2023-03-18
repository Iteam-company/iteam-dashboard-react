import { Box, Modal } from '@mui/material';
import { FC, useState } from 'react';
import { useNotifySnackbar } from '../../../../../hooks/snackbar/use-notify-snackbar';
import { AddButton } from '../modal-buttons/add';
import { CloseButton } from '../modal-buttons/close';
import * as Yup from 'yup';
import { Error as ApiError } from '../../../../../types/common/api/error';
import { useFormik } from 'formik';
import { User } from '../../../../../types/common/api/user';
import {
	useUpdateUserMutation,
	useUploadUserCVMutation,
} from '../../../../../api/user';
import { NameTextField } from '../modal-textfields/name-text-field';
import { SurnameTextField } from '../modal-textfields/surname-text-fields';
import { Loader } from '../../loader';
import { FileUpload } from '../../file-upload';
import { style } from '../../../../../styles/modal-style';

type Props = {
	open?: boolean;
	handleOpen?: () => void;
	handleClose?: () => void;
	user: User;
};

export const EditUserModal: FC<Props> = ({
	open,
	handleOpen,
	handleClose,
	user,
}) => {
	const [file, setFile] = useState<File | null>(null);
	const [data] = useUploadUserCVMutation();
	const [update, { isLoading, isSuccess }] = useUpdateUserMutation();
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

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setFile(event.target.files[0]);
		}
		return;
	};

	function handleUploadClick() {
		if (user && file) {
			const formData = new FormData();
			formData.append('file', file);
			formData.append('userId', user.id.toString());
			data(formData);
			setFile(null);
		}
		return;
	}

	if (isLoading) {
		return <Loader isLoading={isLoading} />;
	}
	if (isSuccess && handleClose) {
		handleClose();
	}

	const { errors, touched, values, handleChange, handleSubmit } = formik;
	return (
		<>
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
						<FileUpload file={file} handleFileUpload={handleFileUpload} />
						<Box sx={{ textAlign: 'center' }}>
							<Box sx={{ display: 'inline-block', mr: 2 }}>
								<AddButton text='edit user' handleClick={handleUploadClick} />
							</Box>
							<CloseButton handleClose={handleClose} />
						</Box>
					</Box>
				</form>
			</Modal>
		</>
	);
};
