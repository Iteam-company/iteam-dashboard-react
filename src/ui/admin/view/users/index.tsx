import { Box } from '@mui/material';
import { SearchByProperties } from '../../../components/common/search-by-properties';
import { ViewDefaultPage } from '../../../components/common/view-default-page';
import { UsersTable } from '../../components/view/users/users-table';

export const Users = () => {
	return (
		<ViewDefaultPage tabTitle='users-table' title='users-table'>
			<Box sx={{ ml: 2 }}>
				<SearchByProperties />
			</Box>
			<UsersTable />
		</ViewDefaultPage>
	);
};
