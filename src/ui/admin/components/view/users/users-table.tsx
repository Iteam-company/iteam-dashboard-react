import {
	Table as CommonTable,
} from '@mui/material';
import { memo } from 'react';
import { useGetAllUsersQuery } from '../../../../../api/users';
import { columns } from '../../../../../constants/admin/columns-schema';
import { ContextMenuDropDown } from '../../../../components/common/context-menu-dropdown';
import { Table } from '../../../../components/common/table';

export const UsersTable = memo(() => {
	const { data = null } = useGetAllUsersQuery();

	return (
		<CommonTable sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
			<Table data={data} columns={columns} button={<ContextMenuDropDown />} />
		</CommonTable>
	);
});

UsersTable.displayName = 'UsersTable';
