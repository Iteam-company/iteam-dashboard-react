import { Box, Container, Typography } from '@mui/material';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { FC } from 'react';
import { User } from '../../../../../../types/common/api/user';
import { objectFieldChecker } from '../../../../../utils/object-field-checker';
type Props = {
	data: User;
};

export const UserSkillsItem: FC<Props> = ({ data }) => {
	const { skills } = objectFieldChecker<User>(data);

	return (
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
	);
};
