import { Skeleton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../../../../../api/user';
import { UserFinancialDetailsItem } from './user-financial-details-item';

export const UserFinancialDetails = () => {
	const { id = null } = useParams();
	const { data = null } = useGetUserQuery(id);
	return <>{data ? <UserFinancialDetailsItem data={data} /> : <Skeleton />}</>;
};
