import { TableCell, TableHead, TableRow } from '@mui/material';
import { FC, memo } from 'react';
import { Column } from '../../../../types/admin/column';

type Props = {
	columns?: Array<Column>;
};

export const HeadOfTable: FC<Props> = memo(({ columns = [] }) => {
	return (
		<TableHead>
			<TableRow>
				{columns.map((column, i) => (
					<TableCell
						sx={
							column.title === 'name' || column.title === 'email'
								? { textAlign: 'center' }
								: { textAlign: 'left' }
						}
						key={`${column} - ${i}`}>
						{column.title}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
});

HeadOfTable.displayName = 'HeadOfTable';
