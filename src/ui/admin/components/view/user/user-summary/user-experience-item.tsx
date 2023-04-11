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

export const UserExperienceItem: FC<Props> = ({ data }) => {
	const { experience } = objectFieldChecker<User>(data);
	const [title] = useState('Experience');
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<UserCardWrapper
			title={title}
			modal={<EditModal />}
			open={open}
			handleOpen={handleOpen}
			handleClose={handleClose}>
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
		</UserCardWrapper>
	);
};
