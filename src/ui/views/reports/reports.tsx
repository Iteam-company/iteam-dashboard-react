import { memo } from 'react';
import { ViewDefaultPage } from '../../components/view-default-page';

export const Reports = memo(() => {
	return <ViewDefaultPage tabTitle='Reports'></ViewDefaultPage>;
});

Reports.displayName = 'Reports';
