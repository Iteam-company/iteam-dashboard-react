import { Typography } from '@mui/material';
import { FC } from 'react';
import { User } from '../../../../../types/common/api/user';
import { Status } from '../../../../../types/common/api/user/status';

type Props = {
	user: User;
};

export const UserStatus: FC<Props> = ({ user }) => {
	const { status } = user;

	return (
		<Typography
			sx={{
				color: (theme) =>
					status === Status.ARCHIVED
						? theme.palette.error.light
						: theme.palette.success.light,
				textTransform: 'capitalize',
				fontSize: 'inherit',
			}}>
			{status}
		</Typography>
	);
};
