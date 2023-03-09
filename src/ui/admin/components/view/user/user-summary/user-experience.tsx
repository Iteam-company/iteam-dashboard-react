import { Box, Card } from '@mui/material';
import { useState } from 'react';
import { UserCardTop } from './user-card-top';
import { UserExperienceItem } from './user-experience-item';

export const UserExperience = () => {
	const [title] = useState('Experience');
	return (
		<Card>
			<Box sx={{ p: 2 }}>
				<UserCardTop title={title}>
					<UserExperienceItem />
				</UserCardTop>
			</Box>
		</Card>
	);
};
