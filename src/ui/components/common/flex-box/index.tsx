import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface FlexBox extends BoxProps {
	justifyContent?: string;
	alignItems?: string;
	gridGap?: string;
}

export const Flexbox = styled(Box)<FlexBox>(
	({ justifyContent, alignItems, gridGap }) => ({
		display: 'flex',
		justifyContent: justifyContent || 'stretch',
		alignItems: alignItems || 'stretch',
		gridGap: gridGap || 0
	}),
);
