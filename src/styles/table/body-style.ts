import { styled, Table, TableRow } from '@mui/material';

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},

	'&:last-child td, &:last-child th': {
		border: 0,
	},
	'&.archived': {
		backgroundColor: theme.palette.action.disabledBackground,
	},
}));

