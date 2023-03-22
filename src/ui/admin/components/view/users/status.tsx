import { Typography } from '@mui/material';
import { FC } from 'react';
import { User } from '../../../../../types/common/api/user';
import { Status } from '../../../../../types/common/api/user/status';

type Props = {
	user: User;
};

export const UserStatus: FC<Props> = ({ user }) => {
	const { status } = user;
	const color = status === Status.UNARCHIVED ? '#38CA54' : '#F55467';
	return (
		<Typography sx={{ color: color, textTransform: 'capitalize' }}>
			{status}
		</Typography>
	);
};
