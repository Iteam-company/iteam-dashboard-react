import { useState } from 'react';
import { UserCardTop } from './user-card-top';
import { UserExperienceItem } from './user-experience-item';

export const UserExperience = () => {
	const [title] = useState('Experience');
	return (
		<UserCardTop title={title}>
			<UserExperienceItem />
		</UserCardTop>
	);
};
