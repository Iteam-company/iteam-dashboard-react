import { UserCardWrapper } from './user-card-wrapper';
import { UserCv } from '../../../../../components/common/cv/user-cv';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../../../../../api/user';
import { useState } from 'react';
import { Skeleton } from '@mui/material';

export const UserAbout = () => {
	const { id = null } = useParams();
	const { data = null } = useGetUserQuery(id);
	const [title] = useState('About');
	const { cv = null } = data ?? {};
	return (
		<UserCardWrapper title={title}>
			{data ? <UserCv cv={cv} /> : <Skeleton />}
		</UserCardWrapper>
	);
};
