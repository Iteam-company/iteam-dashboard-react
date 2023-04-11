import { Box, Container, Typography } from '@mui/material';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { FC, useState } from 'react';
import { User } from '../../../../../../types/common/api/user';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';
import { UserCardWrapper } from './user-card-wrapper';
import { EditModal } from '../../../../../components/common/modals/edit-user/modal';
type Props = {
	data: User;
};

export const UserSkillsItem: FC<Props> = ({ data }) => {
	const { skills } = objectFieldChecker<User>(data);
	const [title] = useState('Skills');
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
			<>
				<Typography>{skills}</Typography>
				<Box
					sx={{
						width: '100%',
						height: '1px',
						backgroundColor: '#f3f3f3',
						mt: 1,
						mb: 1,
					}}></Box>
				<Container
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<ArrowRightAltOutlinedIcon
						sx={{
							pt: '3px',
						}}
					/>
				</Container>
			</>
		</UserCardWrapper>
	);
};
