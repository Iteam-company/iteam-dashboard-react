import { Skeleton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../../../../../api/user';
import { UserInfoItem } from './user-info-item';

export const UserInfo = () => {
	const { id = null } = useParams();
	const { data = null } = useGetUserQuery(id);

	return <>{data ? <UserInfoItem data={data} /> : <Skeleton />}</>;
};
