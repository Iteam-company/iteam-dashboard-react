import styled from "@emotion/styled";
import { Table } from "@mui/material";

export const MuiTable = styled(Table)({
	'&.disabled': {
		pointerEvents: 'none',
		opacity: '0.5',
	},
});
