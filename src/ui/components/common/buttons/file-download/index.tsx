import { FC } from 'react';
import { saveAs } from 'file-saver';
import { Box, Button, Tooltip } from '@mui/material';
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined';

type Props = {
	originalName?: string;
	fileUrl?: string;
	children: JSX.Element;
};

export const ButtonFileDownload: FC<Props> = ({
	originalName,
	fileUrl,
	children,
}) => {
	const handleDownload = () => {
		if (fileUrl && originalName) {
			saveAs(fileUrl, originalName);
		}
		return;
	};

	return (
		<Box sx={{ cursor: 'pointer' }} onClick={handleDownload}>
			<Tooltip title='download'>{children}</Tooltip>
		</Box>
	);
};
