import { Box, Card, Container } from '@mui/material';
import { memo, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../../../../api/user';
import { AdminRoutes } from '../../../../../constants/admin/admin-routes';
import { CommontRoutes } from '../../../../../constants/common/routes/common-routes';
import { ButtonBack } from '../../../../components/common/buttons/back';
import { Loader } from '../../../../components/common/loader';
import { ViewDefaultPage } from '../../../../components/common/view-default-page';
import { UserAbout } from '../../../components/view/user/user-summary/user-about';
import { UserEducation } from '../../../components/view/user/user-summary/user-education';
import { UserExperience } from '../../../components/view/user/user-summary/user-experience';
import { UserInfo } from '../../../components/view/user/user-summary/user-info';
import { UserSkills } from '../../../components/view/user/user-summary/user-skills';

export const UserSummary = memo(() => {
	const { id = null } = useParams();
	const { data, isLoading } = useGetUserQuery(id);

	return (
		<>
			<Loader isLoading={isLoading} />
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 2 }}>
				<ViewDefaultPage
					tabTitle='Users'
					title='Users'
					buttonBack={
						<ButtonBack
							linkToPage={`${CommontRoutes.ROOT_PATH}${AdminRoutes.USERS}`}
						/>
					}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '20px',
							mt: 2,
						}}>
						<Card>
							<Container
								sx={{
									display: 'flex',
									flexWrap: { md: 'nowrap', xs: 'wrap' },
									justifyContent: { xs: 'center' },
									alignItems: 'center',
									p: 3,
								}}>
								<UserInfo />
							</Container>
						</Card>
						<Card>
							<Box sx={{ p: 2 }}>
								<UserAbout />
							</Box>
						</Card>
						<Card>
							<Box sx={{ p: 2 }}>
								<UserExperience />
							</Box>
						</Card>
						<Card>
							<Box sx={{ p: 2 }}>
								<UserEducation />
							</Box>
						</Card>
						<Card>
							<Box sx={{ p: 2 }}>
								<UserSkills />
							</Box>
						</Card>
					</Box>
				</ViewDefaultPage>
			</Box>
		</>
	);
});

UserSummary.displayName = 'UserSummary';
