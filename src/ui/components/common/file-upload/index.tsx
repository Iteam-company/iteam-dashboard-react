import { FC, useState } from 'react';
import { useUploadUserCVMutation } from '../../../../api/user';
import { User } from '../../../../types/common/api/user';
import { UserCv } from '../cv/user-cv';
import { ChooseFileButton } from '../buttons/file-choose';
import { FileUploadButton } from '../buttons/file-upload';

type Props = {
	text?: string;
	user?: User;
};

export const FileUpload: FC<Props> = ({ user }) => {
	const [file, setFile] = useState<File | null>(null);
	const [data] = useUploadUserCVMutation();

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
		}

		return;
	}
	return (
		<>
			{file || user?.cv ? (
				<>
					<UserCv cv={user?.cv} file={file} />
					<FileUploadButton handleUploadClick={handleUploadClick} />
				</>
			) : (
				<ChooseFileButton handleFileUpload={handleFileUpload} />
			)}
		</>
	);
};
