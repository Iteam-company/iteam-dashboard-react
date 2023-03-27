import { FC } from 'react';
import { Box } from '@mui/material';
import { User } from '../../../../types/common/api/user';
import { UploadFileChoose } from '../buttons/upload-file-choose';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Flexbox } from '../flex-box';

type Props = {
	text?: string;
	user?: User;
	file?: File | null;
	handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
	removeFile?: () => void;
};

export const FileUpload: FC<Props> = ({
	user,
	file,
	handleFileUpload,
	removeFile,
}) => {
	return (
		<>
			{file ? (
				<>
					<Flexbox>
						<Box sx={{ mr: 1, cursor: 'pointer' }} onClick={removeFile}>
							<ClearOutlinedIcon />
						</Box>
						<Box sx={{ mr: 2, maxWidth: '100px', overflow: 'hidden' }}>
							{file.name.length > 14
								? `${file.name.slice(0, 14)}...`
								: file.name}
						</Box>
					</Flexbox>
				</>
			) : (
				<UploadFileChoose handleFileUpload={handleFileUpload} />
			)}
		</>
	);
};
