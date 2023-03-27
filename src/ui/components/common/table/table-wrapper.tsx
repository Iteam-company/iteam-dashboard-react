import { FC, memo } from 'react';
import { Table } from '../custome-table-parts/mui-table';
import { Column } from '../../../../types/admin/column';
import { UsersResponse } from '../../../../types/admin/users';
import { BodyOfTable } from './body-of-table';
import { HeadOfTable } from './head-of-table';

type Props = {
	columns?: Array<Column>;
	data?: UsersResponse;
	reFetching?: boolean;
};

export const TableWrapper: FC<Props> = memo(({ columns, data, reFetching }) => {
	return (
		<Table size='small' className={reFetching ? 'disabled' : ''}>
			<HeadOfTable columns={columns} />
			<BodyOfTable data={data} />
		</Table>
	);
});

TableWrapper.displayName = 'TableWrapper';
