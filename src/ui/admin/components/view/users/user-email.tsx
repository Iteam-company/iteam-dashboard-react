import { Box, Tooltip } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../../../types/common/api/user';

type Props = {
	user: User;
};

export const UserEmail: FC<Props> = ({ user }) => {
	const { email } = user;
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(`${user.id}`);
	};
	return (
		<Tooltip title='click for more information'>
			<Box
				sx={{
					cursor: 'pointer',
				}}
				onClick={handleNavigate}>
				{email}
			</Box>
		</Tooltip>
	);
};
