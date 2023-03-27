import { ChangeEvent, FC, memo, useState } from 'react';
import { Table } from '../custome-table-parts/mui-table';
import { Column } from '../../../../types/admin/column';
import { UsersResponse } from '../../../../types/admin/users';
import { BodyOfTable } from './body-of-table';
import { HeadOfTable } from './head-of-table';
import Pagination from '@mui/material/Pagination';
import { Box, Stack } from '@mui/system';
import { Flexbox } from '../flex-box';

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
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
			}}>
			<Table
				size='small'
				className={reFetching ? 'disabled' : ''}
				sx={{ flex: '1 1 auto' }}>
				<HeadOfTable columns={columns} />

				<BodyOfTable data={currentUsers} />
			</Table>
			<Flexbox
				justifyContent={'center'}
				alignItems={'center'}
				sx={{ mt: 2, mb: 2 }}>
				<Stack spacing={2}>
					<Pagination
						shape='rounded'
						count={count}
						boundaryCount={0}
						onChange={handleChange}
					/>
				</Stack>
			</Flexbox>
		</Box>
	);
});

TableWrapper.displayName = 'TableWrapper';
