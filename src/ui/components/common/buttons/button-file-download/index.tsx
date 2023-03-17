import { FC } from 'react';
import { saveAs } from 'file-saver';
import { Button } from '@mui/material';

type Props = {
	fileName?: string;
	fileUrl?: string;
};

export const ButtonFileDownload: FC<Props> = ({ fileName, fileUrl }) => {
	const handleDownload = () => {
		if (fileUrl && fileName) {
			saveAs(fileUrl, fileName);
		}
		return;
	};

	return (
		<Button variant='contained' component='label' onClick={handleDownload}>
			download Cv
		</Button>
	);
};
