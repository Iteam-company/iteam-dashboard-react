import { Box, Typography } from '@mui/material';
import { FC, Fragment } from 'react';
import { User } from '../../../../../../types/common/api/user';
import { Flexbox } from '../../../../../components/common/flex-box';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';

type Props = {
	data: User;
};

export const UserExperienceItem: FC<Props> = ({ data }) => {
	const { experience } = objectFieldChecker<User>(data);

	return (
		<Flexbox sx={{ gridGap: '16px' }}>
			<Box
				component='img'
				alt='user-avatar'
				src='https://via.placeholder.com/50'
				sx={{ maxWidth: '50px', maxHeight: '50px' }}
			/>
			<Box sx={{ width: '100%' }}>
				<Typography>{experience}</Typography>
				<Box>{experience}</Box>
			</Box>
		</Flexbox>
	);
};
