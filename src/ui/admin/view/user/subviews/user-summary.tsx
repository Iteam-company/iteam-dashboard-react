import { Box, Card } from '@mui/material';
import React, { useRef } from 'react';
import { memo, useEffect } from 'react';
import { AdminRoutes } from '../../../../../constants/admin/admin-routes';
import { CommontRoutes } from '../../../../../constants/common/routes/common-routes';
import { ButtonBack } from '../../../../components/common/buttons/back';
import { ViewDefaultPage } from '../../../../components/common/view-default-page';
import { UserAbout } from '../../../components/view/user/user-summary/user-about';
import { UserEducation } from '../../../components/view/user/user-summary/user-education';
import { UserExperience } from '../../../components/view/user/user-summary/user-experience';
import { UserFinancialDetails } from '../../../components/view/user/user-summary/user-financial-details';
import { UserInfo } from '../../../components/view/user/user-summary/user-info';
import { UserSkills } from '../../../components/view/user/user-summary/user-skills';

export const UserSummary = memo(() => {
	const ref = useRef<HTMLElement | null>(null);

	const goToHeader = () => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
		}
	};

	useEffect(() => {
		goToHeader();
	}, []);

	return (
		<>
			<Box ref={ref} />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gridGap: '20px',
					p: 2,
				}}>
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
							<Box sx={{ p: 3 }}>
								<UserInfo />
							</Box>
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
								<UserFinancialDetails />
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
