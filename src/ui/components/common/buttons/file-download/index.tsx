import { FC } from 'react';
import { saveAs } from 'file-saver';
import { Box, Button, Tooltip } from '@mui/material';
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined';

type Props = {
	originalName?: string;
	fileUrl?: string;
};

export const ButtonFileDownload: FC<Props> = ({ originalName, fileUrl }) => {
	const handleDownload = () => {
		if (fileUrl && originalName) {
			saveAs(fileUrl, originalName);
		}
		return;
	};

	return (
		<Box sx={{ cursor: 'pointer' }} onClick={handleDownload}>
			<Tooltip title='download'>
				<BrowserUpdatedOutlinedIcon sx={{ fontSize: 'medium' }} />
			</Tooltip>
		</Box>
	);
};
