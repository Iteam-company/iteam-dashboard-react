import { Container } from '@mui/material';
import { memo } from 'react';
import { ViewDefaultPage } from '../../../components/common/view-default-page';
import { UserAbout } from '../../components/view/user/user-summary/user-about';
import { UserEducation } from '../../components/view/user/user-summary/user-education';
import { UserExperience } from '../../components/view/user/user-summary/user-experience';
import { UserInfo } from '../../components/view/user/user-summary/user-info';
import { UserSkills } from '../../components/view/user/user-summary/user-skills';

export const UserSummary = memo(() => {
	return (
		<ViewDefaultPage tabTitle='Users'>
			<Container maxWidth='md'>
				<UserInfo />
				<UserAbout />
				<UserExperience />
				<UserEducation />
				<UserSkills />
			</Container>
		</ViewDefaultPage>
	);
});

UserSummary.displayName = 'UserSummary';
