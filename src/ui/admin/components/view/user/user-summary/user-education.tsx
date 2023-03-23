import { useState } from 'react';
import { UserCardTop } from './user-card-top';
import { UserEducationItem } from './user-education-item';

export const UserEducation = () => {
	const [title] = useState('Education');
	return (
		<UserCardTop title={title}>
			<UserEducationItem />
		</UserCardTop>
	);
};
