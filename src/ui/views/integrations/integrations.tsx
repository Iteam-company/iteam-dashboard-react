import { memo, useState } from 'react';
import { ViewDefaultPage } from '../../components/view-default-page';

export const Integration = memo(() => {
	const [title] = useState('Integrations');
	return (
		<ViewDefaultPage title={title} tabtitle={title}>
			
		</ViewDefaultPage>
	);
});

Integration.displayName = 'Integration';
