import { FC, memo } from 'react';
import { MuiTable } from '../../../../styles/table/mui-table';
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
		<MuiTable size='small' className={reFetching ? 'disabled' : ''}>
			<HeadOfTable columns={columns} />
			<BodyOfTable data={data} />
		</MuiTable>
	);
});

Table.displayName = 'Table';
