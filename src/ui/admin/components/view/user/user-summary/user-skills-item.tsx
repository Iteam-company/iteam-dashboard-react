import { Box, Container, Typography } from '@mui/material';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { User } from '../../../../../../types/common/api/user';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';
import { UserCardWrapper } from './user-card-wrapper';
import { UserSkillsPatch } from './user-skills-patch';
import { useUpdateUserMutation } from '../../../../../../api/user';

type Props = {
	data: User;
};

export const UserSkillsItem: FC<Props> = ({ data }) => {
	const { skills, id } = objectFieldChecker<User>(data);
	const title = 'Skills';
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen((prev) => !prev);
	const handleClose = () => setOpen(false);
	const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
		[],
	);
	const [update, { isSuccess }] = useUpdateUserMutation();
	const onSubmit = () => {
		update({ id: +id, skills: selectedTechnologies.join(',') });
	};

	useEffect(() => {
		isSuccess && handleClose();
	}, [isSuccess]);

	const handleTechnologiesChange = (
		event: ChangeEvent<object>,
		value: string[],
	) => {
		setSelectedTechnologies(value);
	};
	return (
		<UserCardWrapper
			title={title}
			open={open}
			handleOpen={handleOpen}
			handleClose={handleClose}>
			<>
				<Typography>
					{open ? (
						<UserSkillsPatch
							handleTechnologiesChange={handleTechnologiesChange}
							selectedTechnologies={selectedTechnologies}
							onSubmit={onSubmit}
						/>
					) : (
						skills
					)}
				</Typography>
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
