import { Box, Card } from '@mui/material';
import { useState } from 'react';
import { UserCardTop } from './user-card-top';
import { UserSkillsItem } from './user-skills-item';

export const UserSkills = () => {
	const [title] = useState('Skills');
	return (
		<Card>
			<Box sx={{ p: 2 }}>
				<UserCardTop title={title}>
					<UserSkillsItem />
				</UserCardTop>
			</Box>
		</Card>
	);
};
