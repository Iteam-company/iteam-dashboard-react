import { Card } from '@mui/material';
import React, { useState } from 'react';
import { UserCardTop } from './user-card-top';
import { UserSkillsItem } from './user-skills-item';

export const UserSkills = () => {
	const [title] = useState('Skills');
	return (
		<Card sx={{ p: 2, mb: 2 }}>
			<UserCardTop title={title}>
				<UserSkillsItem />
			</UserCardTop>
		</Card>
	);
};
