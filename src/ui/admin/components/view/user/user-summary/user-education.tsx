import { useState } from 'react';
import { UserCardWrapper } from './user-card-wrapper';
import { UserEducationItem } from './user-education-item';

export const UserEducation = () => {
	const [title] = useState('Education');
	return (
		<UserCardWrapper title={title}>
			<UserEducationItem />
		</UserCardWrapper>
	);
};
