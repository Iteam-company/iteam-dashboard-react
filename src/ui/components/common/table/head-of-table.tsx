import { TableHead, TableRow } from '@mui/material';
import { FC, memo } from 'react';
import { HeadTableCell } from '../custome-table-parts/head-table-cell';
import { Column } from '../../../../types/admin/column';

type Props = {
	columns?: Array<Column>;
};

export const HeadOfTable: FC<Props> = memo(({ columns = [] }) => {
	return (
		<TableHead>
			<TableRow>
				{columns.map((column, i) => (
					<HeadTableCell key={`${column} - ${i}`}>{column.title}</HeadTableCell>
				))}
			</TableRow>
		</TableHead>
	);
});

HeadOfTable.displayName = 'HeadOfTable';
