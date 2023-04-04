import { Skeleton } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../../../../../api/user';

import { UserCardWrapper } from './user-card-wrapper';
import { UserExperienceItem } from './user-experience-item';

export const UserExperience = () => {
	const [title] = useState('Experience');
	const { id = null } = useParams();
	const { data = null, isLoading } = useGetUserQuery(id);
	return (
		<UserCardWrapper title={title}>
			{data ? <UserExperienceItem data={data} /> : <Skeleton />}
		</UserCardWrapper>
	);
};
