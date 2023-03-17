import { FC } from 'react';
import { User } from '../../../../types/common/api/user';
import { ChooseFileButton } from '../buttons/file-choose';

type Props = {
	text?: string;
	user?: User;
	file?: File | null;
	handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FileUpload: FC<Props> = ({ user, file, handleFileUpload }) => {
	return (
		<>
			{file ? (
				<>{file.name.toUpperCase()}</>
			) : (
				<ChooseFileButton handleFileUpload={handleFileUpload} />
			)}
		</>
	);
};
