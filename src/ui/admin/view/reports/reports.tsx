import { memo } from 'react';
import { ViewDefaultPage } from '../../../components/common/view-default-page';

export const Reports = memo(() => {
	return <ViewDefaultPage tabTitle='Reports' title='Reports'></ViewDefaultPage>;
});

Reports.displayName = 'Reports';
