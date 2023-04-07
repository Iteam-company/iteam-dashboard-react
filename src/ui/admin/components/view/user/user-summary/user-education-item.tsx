import { Box, Typography } from '@mui/material';
import { FC, Fragment } from 'react';
import { User } from '../../../../../../types/common/api/user';
import { Flexbox } from '../../../../../components/common/flex-box';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';

type Props = {
	data: User;
};

export const UserEducationItem: FC<Props> = ({ data }) => {
	const { educationInfo } = objectFieldChecker<User>(data);
	console.log(educationInfo);
	return (
		<>
			{educationInfo.map((item) => {
				const { universityName, specialization, startDate } = item;
				return (
					<Flexbox key={item.id}>
						<Box
							component='img'
							alt='user-avatar'
							src='https://via.placeholder.com/50'
							sx={{ mr: 2, maxWidth: '50px', maxHeight: '50px' }}
						/>
						<Box>
							<Typography variant='body2' sx={{ fontWeight: '800' }}>
								{universityName}
							</Typography>
							<Typography variant='body2'>{specialization}</Typography>
							<Typography variant='body2'>{startDate}</Typography>
						</Box>
					</Flexbox>
				);
			})}
		</>
	);
};
