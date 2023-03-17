import { Box, Paper } from '@mui/material';
import { ButtonWithSelectActions } from '../../../components/common/buttons/button-actions';
import { ButtonBack } from '../../../components/common/buttons/button-back';
import { SearchByProperties } from '../../../components/common/search-by-properties';
import { ViewDefaultPage } from '../../../components/common/view-default-page';
import { UsersTable } from '../../components/view/users/users-table';

export const Users = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 2 }}>
			<ViewDefaultPage
				tabTitle='users-table'
				title='users-table'
				ButtonWithSelectActions={<ButtonWithSelectActions />}
				buttonBack={<ButtonBack />}>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
					<Paper sx={{ p: 2 }}>
						<SearchByProperties />
					</Paper>
					<Paper>
						<UsersTable />
					</Paper>
				</Box>
			</ViewDefaultPage>
		</Box>
	);
};
