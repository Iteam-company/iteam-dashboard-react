import { Box, Tooltip } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../../../types/common/api/user';

type Props = {
	user: User;
};

export const UserNameSurname: FC<Props> = ({ user }) => {
	const name = user.name ? user.name : null;
	const surname = user.surname ? user.surname : null;
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(`${user.id}`);
	};
	return (
		<>
			{name || surname ? (
				<Tooltip title='click for more information'>
					<Box sx={{ cursor: 'pointer' }} onClick={handleNavigate}>
						{name} {surname}
					</Box>
				</Tooltip>
			) : (
				'N/A'
			)}
		</>
	);
};
