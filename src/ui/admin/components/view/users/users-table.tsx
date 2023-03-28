import { Box } from '@mui/material';
import { useGetAllUsersQuery } from '../../../../../api/users';
import { columns } from '../../../../../constants/admin/users-table-columns-schema';
import { Loader } from '../../../../components/common/loader';
import { TableWrapper } from '../../../../components/common/table/table-wrapper';

export const CommonTable = () => {
	const { data, isLoading, isFetching } = useGetAllUsersQuery();
	return (
		<>
			<Box sx={{ height: '100%' }}>
				<Loader isLoading={isLoading} />

				<TableWrapper data={data} columns={columns} reFetching={isFetching} />
			</Box>
		</>
	);
};
