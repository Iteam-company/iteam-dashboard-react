import { memo, useState } from 'react';
import { CommonAppBar } from '../../components/reusable/app-bar';
import { ViewDefaultPage } from '../../components/view-default-page';

export const Integration = memo(() => {
	const [title] = useState('Integrations');
	return (
		<ViewDefaultPage tabTitle={title}>
			<CommonAppBar title={title} />
		</ViewDefaultPage>
	);
});

Integration.displayName = 'Integration';
