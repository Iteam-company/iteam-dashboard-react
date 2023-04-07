import { Box, Theme, Typography } from '@mui/material';
import { ElementType, FC } from 'react';
import { User } from '../../../../../../types/common/api/user';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';
import { Variant } from '@mui/material/styles/createTypography';
import { checkProps } from '../../../../../utils/object-props-checker';
import { Flexbox } from '../../../../../components/common/flex-box';
import { CheckProps } from '../../../../../../types/ui/check-layout-props';

type Props = {
	data: User;
};

export const UserInfoItem: FC<Props> = ({ data }) => {
	const {
		name,
		surname,
		birthday,
		startDate,
		endDate,
		endReason,
		address,
		language,
		positionDescription,
		status,
		email,
		phone,
	} = objectFieldChecker<User>(data);

	console.log(
		name,
		surname,
		birthday,
		startDate,
		endDate,
		endReason,
		address,
		language,
		positionDescription,
		status,
		email,
		phone,
	);

	const userProps = [
		{
			title: 'Full name',
			value: `${name} ${surname}`,
			sx: (theme: Theme) => ({ color: theme.palette.primary.main }),
		},
		{
			title: 'employee position',
			value: positionDescription,
		},
		{
			title: 'phone number',
			value: phone,
		},
		{
			title: 'email',
			value: email,
			sx: (theme: Theme) => ({ color: theme.palette.primary.main }),
		},

		{
			title: 'status',
			value: status,
		},
		{
			title: 'Birthday',
			value: birthday,
		},
		{
			title: 'Start date',
			value: startDate,
		},
		{
			title: 'End date',
			value: endDate,
		},
		{
			title: 'End reason',
			value: endReason,
		},
		{
			title: 'Address',
			value: address,
		},
		{
			title: 'Language',
			value: language,
		},
	];

	return (
		<Box sx={{ display: 'flex', gridGap: '15%' }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
				}}>
				<Box
					component='img'
					alt='user-avatar'
					src={'https://via.placeholder.com/200'}
				/>
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				{userProps.map((element, index) => (
					<Flexbox sx={{ gridGap: '16px' }} key={`${element}-${index}`}>
						<Box>{element.title}</Box>
						{checkProps(element as CheckProps)}
					</Flexbox>
				))}
			</Box>
		</Box>
	);
};
