import { ChangeEvent, FC, memo, useState } from 'react';
import { Table } from '../custome-table-parts/mui-table';
import { Column } from '../../../../types/admin/column';
import { UsersResponse } from '../../../../types/admin/users';
import { BodyOfTable } from './body-of-table';
import { HeadOfTable } from './head-of-table';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/system';

type Props = {
	columns?: Array<Column>;
	data?: UsersResponse;
	reFetching?: boolean;
};

export const TableWrapper: FC<Props> = memo(({ columns, data, reFetching }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [userPerPage, setUsersPerPage] = useState(10);
	const indexOfLastUser = currentPage * userPerPage;
	const count = +Math.ceil((data?.data?.length ?? 0) / userPerPage);

	const indexOfFirstUser = indexOfLastUser - userPerPage;
	const currentUsers = data?.data?.slice(indexOfFirstUser, indexOfLastUser);

	const handleChange = (event: ChangeEvent<unknown>, page: number) => {
		setCurrentPage(page);
	};

	return (
		<>
			<Table size='small' className={reFetching ? 'disabled' : ''}>
				<HeadOfTable columns={columns} />
				<BodyOfTable data={currentUsers} />
			</Table>
			<Stack spacing={2}>
				<Pagination
					shape='rounded'
					count={count}
					page={currentPage}
					onChange={handleChange}
					siblingCount={1}
				/>
			</Stack>
		</>
	);
});

TableWrapper.displayName = 'TableWrapper';
