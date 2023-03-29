import { TableBody } from '@mui/material';
import { FC, memo } from 'react';
import { User } from '../../../../types/common/api/user';
import { HeadTableCell } from '../custome-table/head';
import { StyledTableRow } from '../custome-table/body';
import { Status } from '../../../../types/common/api/user/status';
import { columns } from '../../../../constants/admin/users-table-columns-schema';

type Props = {
	data?: Array<User>;
};
export const BodyOfTable: FC<Props> = memo(({ data }) => {
	return (
		<TableBody>
			{data?.map((user: User, index) => (
				<StyledTableRow
					key={`${user.id} - ${index}`}
					className={user.status === Status.ARCHIVED ? 'archived' : ''}>
					{columns.map((column) => (
						<HeadTableCell
							key={column.id}
							className={user.email ? 'email' : ''}>
							{column.generateColumn(user)}
						</HeadTableCell>
					))}
				</StyledTableRow>
			))}
		</TableBody>
	);
});

BodyOfTable.displayName = 'BodyOfTable';
