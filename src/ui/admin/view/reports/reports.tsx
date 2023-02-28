import { memo, useState } from 'react';
import { ViewDefaultPage } from '../../../components/common/view-default-page';

export const Reports = memo(() => {
	const [title] = useState('Reports')
	return <ViewDefaultPage tabTitle={title} title={title}></ViewDefaultPage>;
});

Reports.displayName = 'Reports';
