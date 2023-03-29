import { Link, styled } from '@mui/material';

export const MyLink = styled(Link)(({ theme }) => ({
	cursor: 'pointer',
	textDecoration: 'none',
	color: theme.palette.primary.dark,
}));
