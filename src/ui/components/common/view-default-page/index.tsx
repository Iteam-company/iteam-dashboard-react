import { Box, Paper } from '@mui/material';
import { memo, PropsWithChildren, FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { AdminRoutes } from '../../../../constants/routes/application-routes/admin-routes';
import { CommontRoutes } from '../../../../constants/routes/application-routes/common-routes';
import { Actions } from '../../../../types/common/action-buton/actions';
import { ButtonBack } from '../../button-back/button-back';
import { ButtonActions } from '../button-actions/button-actions';
import { NavInDefaultPage } from '../nav-in-default-view/nav-in-default-page';

interface Props extends PropsWithChildren {
	tabTitle?: string;
	title?: string;
	navigateRoute?: Array<CommontRoutes | AdminRoutes>;
	actions?: Actions;
}

export const ViewDefaultPage: FC<Props> = memo(
	({ children, title, navigateRoute, actions, tabTitle }) => {
		return (
			<>
				<Helmet>
					<title>{tabTitle}</title>
				</Helmet>

				<Box>
					<Paper sx={{ m: 3 }}>
						<ButtonBack />
						<Box
							sx={{
								position: 'relative',
								minHeight: '70px',
								mt: 1,
								ml: 2,
								mr: 2,
							}}>
							<Box
								sx={{
									mb: 2,
									fontWeight: '600',
									color: '#818589',
									textTransform: 'uppercase',
								}}>
								{title}
							</Box>
							<NavInDefaultPage navigateRoute={navigateRoute} />
							<Box sx={{ position: 'absolute', top: '0', right: '0' }}>
								<ButtonActions actions={actions} />
							</Box>
						</Box>
					</Paper>
					{children}
				</Box>
			</>
		);
	},
);

ViewDefaultPage.displayName = 'ViewDefaultPage';
