import { memo } from 'react';
import { Orders } from '../../components/mocked/orders';
import { ViewDefaultPage } from '../../components/view-default-page';

export const OrdersBox = memo(() => {
	return (
		<ViewDefaultPage tabTitle='Orders'>
			<Orders />
		</ViewDefaultPage>
	);
});

OrdersBox.displayName = 'OrdersBox';
