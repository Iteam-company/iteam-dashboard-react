import { Table as MuiTable } from '@mui/material';
import { FC, memo } from 'react';
import { Column } from '../../../../types/admin/column';
import { UsersResponse } from '../../../../types/admin/users';
import { BodyOfTable } from './body-of-table';
import { HeadOfTable } from './head-of-table';

type Props = {
	columns?: Array<Column>;
	data?: UsersResponse;
	reFetching?: boolean;
};

export const Table: FC<Props> = memo(({ columns, data, reFetching }) => {

	return (
		<MuiTable
			sx={{
				pointerEvents: reFetching ? 'none' : 'initial',
				opacity: reFetching ? 0.5 : 1,
			}}>
			<HeadOfTable columns={columns} />
			<BodyOfTable data={data} />
		</MuiTable>
	);
});

Table.displayName = 'Table';
