import { ChangeEvent, FC, memo, useState } from 'react';
import { Table } from '../custome-table/mui-table';
import { Column } from '../../../../types/admin/column';
import { BodyOfTable } from './body-of-table';
import { HeadOfTable } from './head-of-table';
import Pagination from '@mui/material/Pagination';
import { Flexbox } from '../flex-box';
import { Box } from '@mui/material';
import { User } from '../../../../types/common/api/user';

type Props = {
	columns?: Array<Column>;
	data: Array<User>;
	reFetching?: boolean;
};

export const TableWrapper: FC<Props> = memo(({ columns, data, reFetching }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [userPerPage, setUsersPerPage] = useState(10);
	const indexOfLastUser = currentPage * userPerPage;
	const count = +Math.ceil((data.length ?? 0) / userPerPage);

	const indexOfFirstUser = indexOfLastUser - userPerPage;
	const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);

	const handleChange = (event: ChangeEvent<unknown>, page: number) => {
		setCurrentPage(page);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				gap: '20px',
			}}>
			<Box sx={{ flex: '1 1 100%' }}>
				<Table size='small' className={reFetching ? 'disabled' : ''}>
					<HeadOfTable columns={columns} />
					<BodyOfTable data={currentUsers} />
				</Table>
			</Box>

			<Flexbox justifyContent={'center'} alignItems={'center'}>
				<Pagination
					shape='rounded'
					variant='outlined'
					count={count}
					boundaryCount={0}
					onChange={handleChange}
				/>
			</Flexbox>
		</Box>
	);
});

TableWrapper.displayName = 'TableWrapper';
