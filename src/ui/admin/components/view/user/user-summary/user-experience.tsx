import { Skeleton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../../../../../api/user';
import { UserExperienceItem } from './user-experience-item';

export const UserExperience = () => {
	const { id = null } = useParams();
	const { data = null } = useGetUserQuery(id);
	return <>{data ? <UserExperienceItem data={data} /> : <Skeleton />}</>;
};
