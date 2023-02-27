import { memo } from 'react';
import { ViewDefaultPage } from '../../components/view-default-page';

export const Integration = memo(() => {
	return <ViewDefaultPage tabTitle='Integrations'></ViewDefaultPage>;
});

Integration.displayName = 'Integration';
