import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
	handleUploadClick: () => void;
	text?: string;
};

export const UploadButton: FC<Props> = ({
	text: textUploadCv = 'Upload Cv',
	handleUploadClick,
}) => {
	return (
		<Button variant='contained' component='label' onClick={handleUploadClick}>
			{textUploadCv}
		</Button>
	);
};
