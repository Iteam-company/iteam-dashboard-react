import { memo } from 'react';
import { ViewDefaultPage } from '../../../components/common/view-default-page';

export const Integration = memo(() => {
	return (
		<ViewDefaultPage
			tabTitle='Integrations'
			title='Integrations'></ViewDefaultPage>
	);
});

Integration.displayName = 'Integration';
