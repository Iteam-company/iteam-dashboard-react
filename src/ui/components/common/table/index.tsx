import { Box } from '@mui/material';
import { FC } from 'react';
import { columns } from '../../../../constants/admin/columns-schema';
import { User } from '../../../../types/common/api/user';
import { Loader } from '../loader';
import { TableWrapper } from './table-wrapper';

type Props = {
	data?: Array<User>;
	isLoading: boolean;
	isFetching: boolean;
};

export const CommonTable: FC<Props> = ({
	data = [],
	isLoading,
	isFetching,
}) => {
	return (
		<>
			<Box sx={{ height: '100%' }}>
				<Loader isLoading={isLoading} />

				<TableWrapper data={data} columns={columns} reFetching={isFetching} />
			</Box>
		</>
	);
};
