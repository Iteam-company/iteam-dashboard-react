import {  Tooltip } from '@mui/material';
import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyLink } from '../../../../../styles/my-link';
import { User } from '../../../../../types/common/api/user';


type Props = {
	user: User;
};

export const FullName: FC<Props> = memo(({ user }) => {
	const { name, surname, id } = user;
	const userName = name ? name : null;
	const userSurname = surname ? surname : null;
	const navigate = useNavigate();
	const handleNavigate = useCallback(() => {
		navigate(`${id}`);
	}, [navigate])
	return (
		<>
			{userName || userSurname ? (
				<Tooltip title='click for more information'>
					<MyLink onClick={handleNavigate}>
						{userName} {userSurname}
					</MyLink>
				</Tooltip>
			) : (
				'N/A'
			)}
		</>
	);
});

FullName.displayName = 'FullName';
