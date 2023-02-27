import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PropsWithChildren } from 'react';

export const Flexbox = styled(Box)<PropsWithChildren<BoxProps>>(() => ({
	display: 'flex',
}));
