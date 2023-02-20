import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PropsWithChildren } from 'react';

const Flexbox = styled(Box)<PropsWithChildren<BoxProps>>(({ theme }) => ({
	display: 'flex',
}));

export default function StyledFlexbox(props: BoxProps) {
	return <Flexbox>{props.children}</Flexbox>;
}
