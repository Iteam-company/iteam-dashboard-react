import { FC } from 'react';
import { useNotifySnackbar } from '../../../../../hooks/snackbar/use-notify-snackbar';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { Box, Tooltip } from '@mui/material';

type Props = {
	text: string;
	title?: string;
};

export const ButtonCopy: FC<Props> = ({ text, title }) => {
	const { showSnackbar } = useNotifySnackbar();
	const handleCopy = () => {
		navigator.clipboard.writeText(text);
		showSnackbar('succesfully copied', 'success');
	};
	return (
		<Box onClick={handleCopy}>
			<Tooltip title={title}>
				<ContentCopyOutlinedIcon sx={{ fontSize: 'medium' }} />
			</Tooltip>
		</Box>
	);
};
