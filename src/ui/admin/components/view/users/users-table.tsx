import { useGetAllUsersQuery } from '../../../../../api/users';
import { columns } from '../../../../../constants/admin/columns-schema';
import { useAppSelector } from '../../../../../hooks/store/use-app-selector-hook';
import { userSearch } from '../../../../../store/slices/user-search-slice';
import { Loader } from '../../../../components/common/loader';
import { Table } from '../../../../components/common/table';

export const UsersTable = () => {
	const searchParams = useAppSelector(userSearch);
	const { data, isLoading: isLoading } = useGetAllUsersQuery(searchParams);
	return (
		<>
			<Loader isLoading={isLoading} />
			{/*change logic*/}
			<Table data={data} columns={columns} />
		</>
	);
};
