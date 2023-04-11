import { Skeleton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../../../../../api/user';
import { UserSkillsItem } from './user-skills-item';

export const UserSkills = () => {
	const { id = null } = useParams();
	const { data = null } = useGetUserQuery(id);
	return <>{data ? <UserSkillsItem data={data} /> : <Skeleton />}</>;
};
