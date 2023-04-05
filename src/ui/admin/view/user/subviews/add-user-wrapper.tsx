import { Box, Card } from '@mui/material';
import { AddUser } from '../../../components/view/user/add-user';
import { AddEmailToWhiteList } from '../../../components/view/user/add-user-email-to-white-list';

export const AddUserWrapper = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', p: 2 }}>
			<Card>
				<Box sx={{ p: 2 }}>
					<AddEmailToWhiteList />
				</Box>
			</Card>
			<Card>
				<Box sx={{ p: 2 }}>
					<AddUser />
				</Box>
			</Card>
		</Box>
	);
};
