import { Skeleton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../../../../../api/user';
import { UserEducationItem } from './user-education-item';

export const UserEducation = () => {
	const { id = null } = useParams();
	const { data = null } = useGetUserQuery(id);
	return <>{data ? <UserEducationItem data={data} /> : <Skeleton />}</>;
};
