import { Box, Tooltip } from '@mui/material';
import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoxEllipsis } from '../../../../../styles/box-ellipsis';
import { Flexbox } from '../../../../../styles/flex-box';
import { MyLink } from '../../../../../styles/my-link';
import { User } from '../../../../../types/common/api/user';
import { ButtonCopy } from '../../../../components/common/buttons/copy';

type Props = {
	user: User;
};

export const UserEmail: FC<Props> = ({ user }) => {
	const { email, id } = user;
	const navigate = useNavigate();
	const handleNavigate = useCallback(() => {
		navigate(`${id}`);
	}, []);

	return (
		<Flexbox alignItems={'center'} justifyContent={'space-between'}>
			<Tooltip title='click for more information'>
				<BoxEllipsis onClick={handleNavigate}>
					<MyLink>{email}</MyLink>
				</BoxEllipsis>
			</Tooltip>
			<Box sx={{ cursor: 'pointer' }}>
				<ButtonCopy text={email} />
			</Box>
		</Flexbox>
	);
};
