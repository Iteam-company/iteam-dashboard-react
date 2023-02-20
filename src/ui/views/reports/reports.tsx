import { memo, useState } from 'react';
import { CommonAppBar } from '../../components/reusable/app-bar';
import { ViewDefaultPage } from '../../components/view-default-page';

export const Reports = memo(() => {
	const [title] = useState('Reports');
	return (
		<ViewDefaultPage tabTitle={title}>
			<CommonAppBar title={title} />
		</ViewDefaultPage>
	);
});

Reports.displayName = 'Reports';
