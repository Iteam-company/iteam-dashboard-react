import styled from '@emotion/styled';
import { Table as MuiTable } from '@mui/material';

export const Table = styled(MuiTable)({
	'&.disabled': {
		pointerEvents: 'none',
		opacity: '0.5',
	},
});
