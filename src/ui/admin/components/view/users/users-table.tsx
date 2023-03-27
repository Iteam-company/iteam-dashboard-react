import { useGetAllUsersQuery } from '../../../../../api/users';
import { columns } from '../../../../../constants/admin/columns-schema';
import { Loader } from '../../../../components/common/loader';
import { TableWrapper } from '../../../../components/common/table/table-wrapper';

export const UsersTable = () => {
	const { data, isLoading, isFetching } = useGetAllUsersQuery();
	return (
		<>
			<Loader isLoading={isLoading} />

			<TableWrapper data={data} columns={columns} reFetching={isFetching} />
		</>
	);
};
