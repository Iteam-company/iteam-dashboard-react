import { useState } from 'react';
import { UserCardWrapper } from './user-card-wrapper';
import { UserExperienceItem } from './user-experience-item';

export const UserExperience = () => {
	const [title] = useState('Experience');
	return (
		<UserCardWrapper title={title}>
			<UserExperienceItem />
		</UserCardWrapper>
	);
};
