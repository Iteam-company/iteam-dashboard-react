import { styled, TableCell, tableCellClasses } from '@mui/material';

export const HeadTableCell = styled(TableCell)(({ theme }) => ({
	borderRight: `1px solid ${theme.palette.action.disabledBackground}`,

	[`&.${tableCellClasses.head}`]: {
		height: '50px',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},

	['&:last-child']: {
		textAlign: 'center',
		width: '10%',
		borderRight: '0',
	},

	'&.email': {
		width: '30%',
	},
}));