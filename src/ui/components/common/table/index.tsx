import { Table as MuiTableable } from '@mui/material';
import { FC, memo } from 'react';
import { Column } from '../../../../types/admin/column';
import { UsersResponse } from '../../../../types/admin/users';
import { BodyOfTable } from './body-of-table';
import { HeadOfTable } from './head-of-table';

type Props = {
	columns?: Array<Column>;
	data?: UsersResponse;
};

export const Table: FC<Props> = memo(({ columns, data }) => {
	return (
		<MuiTableable>
			<HeadOfTable columns={columns} />
			<BodyOfTable data={data} />
		</MuiTableable>
	);
});

Table.displayName = 'Table';
