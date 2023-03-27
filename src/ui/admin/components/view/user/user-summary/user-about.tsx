import { useState } from 'react';
import { UserCardWrapper } from './user-card-wrapper';
import { UserAboutItem } from './user-about-item';

export const UserAbout = () => {
	const [title] = useState('About');
	return (
		<UserCardWrapper title={title}>
			<UserAboutItem />
		</UserCardWrapper>
	);
};
