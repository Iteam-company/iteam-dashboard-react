import { Box, Theme, Typography } from '@mui/material';
import { ElementType, FC } from 'react';
import { User } from '../../../../../../types/common/api/user';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';
import { Variant } from '@mui/material/styles/createTypography';

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

	const userProps = [
		{
			value: `${name} ${surname}`,
			variant: 'subtitle1',
			component: 'h2',
			sx: (theme: Theme) => ({ color: theme.palette.primary.main }),
		},
		{
			title: 'employee position',
			value: positionDescription,
			variant: 'subtitle2',
			component: 'h3',
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
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
				{userProps.map((element, index) => (
					<Typography
						sx={element.sx ? element.sx : null}
						variant={
							element.variant ? (`${element.variant}` as Variant) : 'caption'
						}
						component={
							element.component
								? (`${element.component}` as ElementType<JSX.Element>)
								: 'div'
						}
						key={`${element.title}_${index}`}>
						{element.title
							? `${element.title}: ${element.value}`
							: element.value}
					</Typography>
				))}
			</Box>
		</Box>
	);
};
