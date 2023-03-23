import { useState } from 'react';
import { UserCardTop } from './user-card-top';
import { UserSkillsItem } from './user-skills-item';

export const UserSkills = () => {
	const [title] = useState('Skills');
	return (
		<UserCardTop title={title}>
			<UserSkillsItem />
		</UserCardTop>
	);
};
