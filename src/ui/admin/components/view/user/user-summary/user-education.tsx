import { Box, Card } from '@mui/material';
import { useState } from 'react';
import { UserCardTop } from './user-card-top';
import { UserEducationItem } from './user-education-item';

export const UserEducation = () => {
	const [title] = useState('Education');
	return (
		<Card>
			<Box sx={{ p: 2 }}>
				<UserCardTop title={title}>
					<UserEducationItem />
				</UserCardTop>
			</Box>
		</Card>
	);
};
