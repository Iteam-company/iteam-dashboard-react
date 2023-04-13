import { Box, Typography } from '@mui/material';
import { FC, Fragment, useState } from 'react';
import { User } from '../../../../../../types/common/api/user';
import { Flexbox } from '../../../../../components/common/flex-box';
import { EditModal } from '../../../../../components/common/modals/edit-user/modal';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';
import { UserCardWrapper } from './user-card-wrapper';

type Props = {
	data: User;
};

export const UserEducationItem: FC<Props> = ({ data }) => {
	const { educationInfo } = objectFieldChecker<User>(data);
	const [title] = useState('Education');

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	let layout;

	if (educationInfo.length) {
		layout = educationInfo.map((item) => {
			const { universityName, specialization, startDate } = item;
			return (
				<Flexbox key={item.id} sx={{ gridGap: '16px' }}>
					<Box
						component='img'
						alt='user-avatar'
						src='https://via.placeholder.com/50'
						sx={{ maxWidth: '50px', maxHeight: '50px' }}
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
		});
	} else {
		layout = 'N/A';
	}

	return (
		<UserCardWrapper
			title={title}
			modal={<EditModal />}
			open={open}
			handleClose={handleClose}
			handleOpen={handleOpen}>
			<>
				<Flexbox sx={{ gridGap: '16px' }}>
					<Box
						component='img'
						alt='user-avatar'
						src='https://via.placeholder.com/50'
						sx={{ maxWidth: '50px', maxHeight: '50px' }} />
					{layout}
				</Flexbox>
			</>
		</UserCardWrapper>
	);
};
