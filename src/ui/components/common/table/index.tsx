import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { Column } from '../../../../types/admin/column';
import { User } from '../../../../types/common/api/user';
import { UsersResponse } from '../../../../types/common/api/users';

type Props = {
	data?: UsersResponse | null;
	columns?: Array<Column>;
	button?: JSX.Element;
};

export const Table: FC<Props> = ({ data, columns = [], button }) => {
	return (
		<>
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
				{data?.data?.map((user: User) => (
					<TableRow key={user.id}>
						{columns.map((column, index) => (
							<TableCell key={user.id + index}>
								{column.generateColumn(user)}
							</TableCell>
						))}
						<TableCell>{button}</TableCell>
					</TableRow>
				))}
			</TableBody>{' '}
		</>
	);
};
