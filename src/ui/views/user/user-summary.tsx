import { useState } from 'react';
import { Container } from '@mui/material';
import { UserInfo } from '../../components/user/user-info';
import { UserAbout } from '../../components/user/user-about';
import { UserEducation } from '../../components/user/user-education';
import { UserExperience } from '../../components/user/user-experience';
import { UserSkills } from '../../components/user/user-skills';
import { CommonAppBar } from '../../components/reusable/app-bar';
import { ViewDefaultPage } from '../../components/view-default-page';

export const UserPage = () => {
	const [title] = useState('Users');
	return (
		<ViewDefaultPage tabTitle={title}>
			<CommonAppBar title={title} />
			<Container maxWidth='md'>
				<UserInfo />
				<UserAbout />
				<UserExperience />
				<UserEducation />
				<UserSkills />
			</Container>
		</ViewDefaultPage>
	);
};
