import { Box, Paper } from '@mui/material';
import { Flexbox } from '../../../components/common/flex-box';
import { SearchInput } from '../../../components/common/search/input';
import { CommonTable } from '../../components/view/users/users-table';

export const Users = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
				p: 2,
				height: '100%',
			}}>
			<Box
				sx={{
					mt: '20px',
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
					height: '100%',
				}}>
				<Paper sx={{ p: 2, pt: 3 }}>
					<Flexbox>
						<Box>
							<SearchInput />
						</Box>
					</Flexbox>
				</Paper>
				<Paper elevation={0} sx={{ height: '100%' }}>
					<CommonTable />
				</Paper>
			</Box>
		</Box>
	);
};
