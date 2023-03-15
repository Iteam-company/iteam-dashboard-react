import { memo } from 'react';
import { Orders } from '../../../components/common/mocked/orders';
import { ViewDefaultPage } from '../../../components/common/view-default-page';

export const OrdersBox = memo(() => {
	return (
		<ViewDefaultPage tabTitle='Orders' title='Orders' >
			<Orders />
		</ViewDefaultPage>
	);
});

OrdersBox.displayName = 'OrdersBox';
