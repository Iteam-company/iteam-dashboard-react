import { TableBody } from '@mui/material';
import { FC, memo } from 'react';
import { columns } from '../../../../constants/admin/columns-schema';
import { User } from '../../../../types/common/api/user';
import { HeadTableCell } from '../custome-table-parts/head-table-cell';
import { StyledTableRow } from '../custome-table-parts/body-style';
import { Status } from '../../../../types/common/api/user/status';

type Props = {
	data?: Array<User>;
};
export const BodyOfTable: FC<Props> = memo(({ data }) => {
	return (
		<TableBody>
			{data?.map((user: User) => (
				<StyledTableRow
					key={user.id}
					className={user.status === Status.ARCHIVED ? 'archived' : ''}>
					{columns.map((column, index) => (
						<HeadTableCell
							key={user.id + index}
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
