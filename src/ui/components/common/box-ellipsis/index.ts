import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

interface BoxEllipsis extends BoxProps {
	width?: string;
}

export const BoxEllipsis = styled(Box)<BoxEllipsis>(({ width }) => ({
	overflow: 'hidden',
	maxWidth: width || '150px',
	textOverflow: 'ellipsis',
	cursor: 'pointer',
}));
