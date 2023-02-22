import { memo, useState } from 'react';
import { ViewDefaultPage } from '../../components/view-default-page';

export const Reports = memo(() => {
	const [title] = useState('Reports');
	return (
		<ViewDefaultPage title={title} tabtitle={title}>
		</ViewDefaultPage>
	);
});

Reports.displayName = 'Reports';
