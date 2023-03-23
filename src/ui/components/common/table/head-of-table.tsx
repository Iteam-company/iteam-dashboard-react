import { TableHead, TableRow } from '@mui/material';
import { FC, memo } from 'react';
import { StyledTableCell } from '../../../../styles/table/head-style';
import { Column } from '../../../../types/admin/column';

type Props = {
	columns?: Array<Column>;
};

export const HeadOfTable: FC<Props> = memo(({ columns = [] }) => {
	return (
		<TableHead>
			<TableRow>
				{columns.map((column, i) => (
					<StyledTableCell key={`${column} - ${i}`}>
						{column.title}
					</StyledTableCell>
				))}
			</TableRow>
		</TableHead>
	);
});

HeadOfTable.displayName = 'HeadOfTable';
