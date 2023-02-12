import * as React from 'react';
import  {Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const Flexbox = styled(Box)<React.PropsWithChildren<BoxProps>>(({ theme }) => ({
  display: 'flex',
}));

export default function StyledFlexbox(props: BoxProps) {
  return <Flexbox>{props.children}</Flexbox>
}
