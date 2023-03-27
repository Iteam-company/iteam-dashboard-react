import { useState } from 'react';
import { UserCardWrapper } from './user-card-wrapper';
import { UserSkillsItem } from './user-skills-item';

export const UserSkills = () => {
	const [title] = useState('Skills');
	return (
		<UserCardWrapper title={title}>
			<UserSkillsItem />
		</UserCardWrapper>
	);
};
