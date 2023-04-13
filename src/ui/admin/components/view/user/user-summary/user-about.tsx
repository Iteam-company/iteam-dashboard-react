import { UserCv } from '../../../../../components/common/cv/user-cv';
import { useParams } from 'react-router-dom';
import {
	useGetUserQuery,
	useUploadUserCVMutation,
} from '../../../../../../api/user';
import { Skeleton } from '@mui/material';
import { UserCardWrapper } from './user-card-wrapper';
import { EditModal } from '../../../../../components/common/modals/edit-user/modal';
import { memo, useMemo, useState } from 'react';
import { FileUpload } from '../../../../../components/common/file-upload';

export const UserAbout = memo(() => {
	const { id = null } = useParams();
	const { data } = useGetUserQuery(id);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [file, setFile] = useState<File | null>(null);
	const [fileDownload, { isSuccess, isLoading }] = useUploadUserCVMutation();
	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setFile(event.target.files[0]);
		}
		return;
	};
	const removeFile = () => {
		setFile(null);
	};
	const handleUploadClick = useMemo(() => {
		if (file && id) {
			const formData = new FormData();
			formData.append('file', file);
			formData.append('userId', id.toString());
			fileDownload(formData);
			if (isSuccess) {
				handleClose();
				removeFile();
			}
		}
		return;
	}, [isSuccess, fileDownload, file, id, open, setFile]);

	return (
		<>
			{data?.cv ? (
				<UserCardWrapper
					isLoading={isLoading}
					modal={
						<EditModal
							handleSubmit={handleUploadClick!}
							text={'Change Cv'}
							element={
								<FileUpload
									file={file}
									removeFile={removeFile}
									handleFileUpload={handleFileUpload}
								/>
							}
						/>
					}
					open={open}
					handleOpen={handleOpen}
					handleClose={handleClose}>
					<>
						<UserCv cv={data.cv || 'N/A'} />
					</>
				</UserCardWrapper>
			) : (
				<Skeleton />
			)}
		</>
	);
});

UserAbout.displayName = 'UserAbout';
