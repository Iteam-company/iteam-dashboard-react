import { Card } from '@mui/material';
import React, { useState } from 'react';
import { UserCardTop } from './user-card-top';
import { UserEducationItem } from './user-education-item';

export const UserEducation = () => {
	const [title] = useState('Education');
	return (
		<Card sx={{ p: 2, mb: 2 }}>
			<UserCardTop title={title}>
				<UserEducationItem />
			</UserCardTop>
		</Card>
	);
};
