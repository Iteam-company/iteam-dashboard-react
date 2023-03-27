import { Box, Paper } from '@mui/material';
import { Flexbox } from '../../../components/common/flex-box';
import { SearchInput } from '../../../components/common/search/input';
import { ViewDefaultPage } from '../../../components/common/view-default-page';
import { CommonTable } from '../../components/view/users/users-table';

export const Users = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 2 }}>
			<ViewDefaultPage tabTitle='users-table' title='users-table'>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
					<Paper sx={{ p: 2, pt: 3 }}>
						<Flexbox>
							<Box>
								<SearchInput />
							</Box>
						</Flexbox>
					</Paper>
					<Paper elevation={0}>
						<CommonTable />
					</Paper>
				</Box>
			</ViewDefaultPage>
		</Box>
	);
};
