import React, { useState } from 'react';
import { UserCardTop } from '../../reusable/user-card-top';
import { UserEducationItem } from './user-education-item';

export const UserEducation = () => {
  const [title] = useState('Education');
	return (
		<UserCardTop UserEducationItem={<UserEducationItem />} title={title}/>
	);
};
