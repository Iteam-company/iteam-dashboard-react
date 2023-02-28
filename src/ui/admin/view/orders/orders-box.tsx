import { memo, useState } from 'react';
import { Orders } from '../../../components/common/mocked/orders';
import { ViewDefaultPage } from '../../../components/common/view-default-page';

export const OrdersBox = memo(() => {
	const [title] = useState('Orders')
	return (
		<ViewDefaultPage tabTitle={title} title={title}>
			<Orders />
		</ViewDefaultPage>
	);
});

OrdersBox.displayName = 'OrdersBox';
