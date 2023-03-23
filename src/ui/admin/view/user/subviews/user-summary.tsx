import { Box, Container } from '@mui/material';
import { memo } from 'react';
import { AdminRoutes } from '../../../../../constants/admin/admin-routes';
import { CommontRoutes } from '../../../../../constants/common/routes/common-routes';
import { ButtonBack } from '../../../../components/common/buttons/back';
import { ViewDefaultPage } from '../../../../components/common/view-default-page';
import { UserAbout } from '../../../components/view/user/user-summary/user-about';
import { UserEducation } from '../../../components/view/user/user-summary/user-education';
import { UserExperience } from '../../../components/view/user/user-summary/user-experience';
import { UserInfo } from '../../../components/view/user/user-summary/user-info';
import { UserSkills } from '../../../components/view/user/user-summary/user-skills';

export const UserSummary = memo(() => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 2 }}>
			<ViewDefaultPage
				tabTitle='Users'
				title='Users'
				buttonBack={
					<ButtonBack
						linkToPage={`${CommontRoutes.ROOT_PATH}${AdminRoutes.USERS}`}
					/>
				}>
				<Container
					sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt: 2 }}>
					<UserInfo />
					<UserAbout />
					<UserExperience />
					<UserEducation />
					<UserSkills />
				</Container>
			</ViewDefaultPage>
		</Box>
	);
});

UserSummary.displayName = 'UserSummary';
