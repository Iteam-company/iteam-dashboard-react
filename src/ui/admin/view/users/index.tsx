import { Box, Paper } from '@mui/material';
import { SearchByProperties } from './search-by-properties';
import { ViewDefaultPage } from '../../../components/common/view-default-page';
import { UsersTable } from '../../components/view/users/users-table';

export const Users = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 2 }}>
			<ViewDefaultPage tabTitle='users-table' title='users-table'>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
					<Paper sx={{ p: 2, pt: 3 }}>
						<SearchByProperties />
					</Paper>
					<Paper elevation={0}>
						<UsersTable />
					</Paper>
				</Box>
			</ViewDefaultPage>
		</Box>
	);
};
