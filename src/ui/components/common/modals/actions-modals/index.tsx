import { Box } from '@mui/system';
import { FC, Fragment } from 'react';
import { Action } from '../../../../../types/common/action-button/action';

type Props = {
	usersActions: Array<Action>;
};

export const UserActionsModals: FC<Props> = ({ usersActions }) => {
	return (
		<Box>
			{usersActions?.map((item, index) => (
				<Fragment key={`${item} - ${index}`}>{item.element}</Fragment>
			))}
		</Box>
	);
};
