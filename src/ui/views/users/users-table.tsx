import { useEffect } from 'react';
import { useGetAllUsersQuery } from '../../../api/users';
import { useAppDispatch } from '../../../hooks/store/use-app-dispatch-hook';
import { useAppSelector } from '../../../hooks/store/use-app-selector-hook';
import { allUsers, saveAllUsers } from '../../../store/slices/users-slice';

export const UsersTable = () => {
	const { data = [] } = useGetAllUsersQuery();
	const dispatch = useAppDispatch();
	const users = useAppSelector(allUsers);
	useEffect(() => {
		dispatch(saveAllUsers(data));
	}, [data]);
	return <h1>hi</h1>;
};
