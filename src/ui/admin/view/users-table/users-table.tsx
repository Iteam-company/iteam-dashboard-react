import { useState } from 'react';
import { SearchByProperties } from '../../../components/common/search-by-properties/search-properties';
import { ViewDefaultPage } from '../../../components/common/view-default-page';
import { UsersTableItem } from '../../components/view/users-table/users-table-item';

export const UsersTable = () => {
	const [title] = useState('users-table');
	return (
		<ViewDefaultPage tabTitle={title} title={title}>
			<SearchByProperties>
				<UsersTableItem />
			</SearchByProperties>
		</ViewDefaultPage>
	);
};
