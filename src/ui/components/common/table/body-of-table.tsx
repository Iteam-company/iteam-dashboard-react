import { TableBody } from '@mui/material';
import { FC, memo } from 'react';
import { columns } from '../../../../constants/admin/columns-schema';
import { User } from '../../../../types/common/api/user';
import { UsersResponse } from '../../../../types/admin/users';
import { Status } from '../../../../types/common/api/user/status';
import { StyledTableCell } from '../../../../styles/table/head-style';
import { StyledTableRow } from '../../../../styles/table/body-style';

type Props = {
	data?: UsersResponse;
};
export const BodyOfTable: FC<Props> = memo(({ data }) => {
	return (
		<TableBody>
			{data?.data?.map((user: User) => (
				<StyledTableRow
					key={user.id}
					className={user.status === Status.ARCHIVED ? 'archived' : ''}>
					{columns.map((column, index) => (
						<StyledTableCell key={user.id + index}>
							{column.generateColumn(user)}
						</StyledTableCell>
					))}
				</StyledTableRow>
			))}
		</TableBody>
	);
});

BodyOfTable.displayName = 'BodyOfTable';
