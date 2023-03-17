import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
	handleUploadClick: () => void;
	textUploadCv?: string;
};

export const FileUploadButton: FC<Props> = ({
	textUploadCv = 'Upload Cv',
	handleUploadClick,
}) => {
	return (
		<Button variant='contained' component='label' onClick={handleUploadClick}>
			{textUploadCv}
		</Button>
	);
};
