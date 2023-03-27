import { styled, TableCell, tableCellClasses } from '@mui/material';

export const HeadTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.background.default,
		height: '50px',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},

	['&:last-child']: {
		textAlign: 'center',
		width: '10%',
	},
}));
