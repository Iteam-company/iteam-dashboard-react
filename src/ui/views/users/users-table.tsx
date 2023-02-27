import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { useGetAllUsersQuery } from '../../../api/users';
import { columns } from '../../../constants/generate-column/generate-column';
import { useAppDispatch } from '../../../hooks/store/use-app-dispatch-hook';
import { useAppSelector } from '../../../hooks/store/use-app-selector-hook';
import { saveAllUsers, filteredUser } from '../../../store/slices/users-slice';
import { User } from '../../../types/common/api/user';
import { LongMenu } from '../../components/reusable/long-menu';
import { SearchByProperties } from '../../components/reusable/search-by-properties';
import { ViewDefaultPage } from '../../components/view-default-page';

export const UsersTable = memo(() => {
	const [title] = useState('user-table');
	const { data = null } = useGetAllUsersQuery();
	const dispatch = useAppDispatch();
	const users = useAppSelector(filteredUser);
	useEffect(() => {
		dispatch(saveAllUsers(data));
	}, [data]);

	return (
		<ViewDefaultPage title={title}>
			<SearchByProperties>
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
								<TableCell>
									<LongMenu />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</SearchByProperties>
		</ViewDefaultPage>
	);
});

UsersTable.displayName = 'UsersTable';
