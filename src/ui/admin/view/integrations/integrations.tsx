import { memo, useState } from 'react';
import { ViewDefaultPage } from '../../../components/common/view-default-page';

export const Integration = memo(() => {
	const [title] = useState('Integrations');
	return <ViewDefaultPage tabTitle={title} title={title}></ViewDefaultPage>;
});

Integration.displayName = 'Integration';
