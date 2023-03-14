import { Box, Paper } from '@mui/material';
import { memo, PropsWithChildren, FC } from 'react';
import { AdminRoutes } from '../../../../constants/admin/admin-routes';
import { CommontRoutes } from '../../../../constants/common/routes/common-routes';
import { Actions } from '../../../../types/common/action-buton/actions';
import { DefaultPageToolbar } from '../default-page-toolbar';
import { DefaultTabtitle } from '../mocked/tabtitle-default';
import { DefaultTitle } from '../mocked/title-default';

interface Props extends PropsWithChildren {
	tabTitle?: string;
	title?: string;
	navigateRoute?: Array<CommontRoutes | AdminRoutes>;
	actions?: Array<Actions>;
	buttonBack?: JSX.Element;
	ButtonWithSelectActions?: JSX.Element;
}

export const ViewDefaultPage: FC<Props> = memo(
	({
		children,
		title,
		navigateRoute,
		tabTitle,
		buttonBack,
		ButtonWithSelectActions,
	}) => {
		return (
			<>
				<Paper sx={{ position: 'relative', minHeight: '70px' }}>
					<DefaultTabtitle tabTitle={tabTitle} />
					<Box sx={{ mb: 3 }}>{buttonBack}</Box>
					<Box sx={{ ml: 2, pb: 1 }}>
						<DefaultTitle title={title} />
					</Box>
					<DefaultPageToolbar navigateRoute={navigateRoute} />
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							right: '10px',
							transform: 'translateY(-50%)',
						}}>
						{ButtonWithSelectActions}
					</Box>
				</Paper>
				{children}
			</>
		);
	},
);

ViewDefaultPage.displayName = 'ViewDefaultPage';
