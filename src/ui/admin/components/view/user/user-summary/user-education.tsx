import { Skeleton } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../../../../../api/user';
import { UserCardWrapper } from './user-card-wrapper';
import { UserEducationItem } from './user-education-item';

export const UserEducation = () => {
	const { id = null } = useParams();
	const { data = null } = useGetUserQuery(id);
	return <>{data ? <UserEducationItem data={data} /> : <Skeleton />}</>;
};
