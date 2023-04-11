import { UserCv } from '../../../../../components/common/cv/user-cv';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../../../../../api/user';
import { Skeleton } from '@mui/material';
import { UserCardWrapper } from './user-card-wrapper';

export const UserAbout = () => {
	const { id = null } = useParams();
	const { data = null } = useGetUserQuery(id);

	const { cv = null } = data ?? {};
	return (
		<>
			{data ? (
				<UserCardWrapper>
					<UserCv cv={cv} />
				</UserCardWrapper>
			) : (
				<Skeleton />
			)}
		</>
	);
};
