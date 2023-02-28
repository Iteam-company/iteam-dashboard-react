import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import { memo, useEffect } from 'react';
import { useGetAllUsersQuery } from '../../../../../api/users-table';
import { columns } from '../../../../../constants/generate-column/generate-column';
import { useAppDispatch } from '../../../../../hooks/store/use-app-dispatch-hook';
import { useAppSelector } from '../../../../../hooks/store/use-app-selector-hook';
import {
	allUsers,
	saveAllUsers,
} from '../../../../../store/slices/users-slice';
import { User } from '../../../../../types/common/api/user';
import { LongMenu } from '../../../../components/common/long-menu/long-menu';

export const UsersTableItem = memo(() => {
	const { data = null } = useGetAllUsersQuery();
	const dispatch = useAppDispatch();
	const users = useAppSelector(allUsers);
	useEffect(() => {
		dispatch(saveAllUsers(data));
		console.log(data)
	}, [data]);

	return (
		<Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
			<TableHead>
				<TableRow>
					{columns.map((column, i) => (
						<TableCell key={`${column} - ${i}`} align='center'>
							{column.title}
						</TableCell>
					))}
					<TableCell>settings</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{users?.map((user: User) => (
					<TableRow key={user.id}>
						{columns.map((column, index) => (
							<TableCell key={user.id + index}>
								{column.generateColumn(user)}
							</TableCell>
						))}
						<TableCell><LongMenu /></TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
});

UsersTableItem.displayName = 'UsersTableItem';
