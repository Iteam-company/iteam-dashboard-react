import { Box } from '@mui/material';
import { memo, PropsWithChildren, FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes } from '../../../constants/routes/routes';
import { Actions } from '../../../types/common/actions-button/actions';
import { ButtonActions } from '../reusable/button-actions';
import { ButtonBack } from '../reusable/button-back';
import { NavInDefaultPage } from '../reusable/nav-in-default-page';

interface Props extends PropsWithChildren {
	tabtitle?: string;
	title: string;
	navigateRoute?: Array<Routes>;
	actions?: Actions;
}

export const ViewDefaultPage: FC<Props> = memo(
	({ children, title, navigateRoute, actions, tabtitle }) => {
		return (
			<>
				<Helmet>
					<title>{tabtitle}</title>
				</Helmet>
				<ButtonBack />
				<Box>
					<Box
						sx={{
							position: 'relative',
							minHeight: '70px',
							mt: 1,
							ml: 2,
							mr: 2,
							borderBottom: '1px solid #818589',
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
					{children}
				</Box>
			</>
		);
	},
);

ViewDefaultPage.displayName = 'ViewDefaultPage';
