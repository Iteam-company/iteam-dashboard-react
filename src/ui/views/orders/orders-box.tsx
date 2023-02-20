import { memo, useState } from 'react';
import { Orders } from '../../components/mocked/orders';
import { CommonAppBar } from '../../components/reusable/app-bar';
import { ViewDefaultPage } from '../../components/view-default-page';

export const OrdersBox = memo(() => {
	const [title] = useState('Orders');
	return (
		<>
			{' '}
			<ViewDefaultPage tabTitle={title}>
				<CommonAppBar title={title} />
				<Orders />
			</ViewDefaultPage>
		</>
	);
});

OrdersBox.displayName = 'OrdersBox';
