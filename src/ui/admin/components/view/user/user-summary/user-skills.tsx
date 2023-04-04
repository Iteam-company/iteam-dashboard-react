import { Skeleton } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../../../../../api/user';
import { UserCardWrapper } from './user-card-wrapper';
import { UserSkillsItem } from './user-skills-item';

export const UserSkills = () => {
	const [title] = useState('Skills');
	const { id = null } = useParams();
	const { data = null } = useGetUserQuery(id);
	return (
		<UserCardWrapper title={title}>
			{data ? <UserSkillsItem data={data} /> : <Skeleton />}
		</UserCardWrapper>
	);
};
