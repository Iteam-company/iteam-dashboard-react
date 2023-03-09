import { TableBody, TableCell, TableRow } from '@mui/material';
import { FC, memo } from 'react';
import { columns } from '../../../../constants/admin/columns-schema';
import { User } from '../../../../types/common/api/user';
import { UsersResponse } from '../../../../types/admin/users';

type Props = {
	data?: UsersResponse;
};
export const BodyOfTable: FC<Props> = memo(({ data }) => {
	return (
		<TableBody>
			{data?.data?.map((user: User) => (
				<TableRow key={user.id}>
					{columns.map((column, index) => (
						<TableCell
							key={user.id + index}
							sx={
								user.name && user.email
									? { textAlign: 'center' }
									: { textAlign: 'left' }
							}>
							{column.generateColumn(user)}
						</TableCell>
					))}
				</TableRow>
			))}
		</TableBody>
	);
});

BodyOfTable.displayName = 'BodyOfTable';
