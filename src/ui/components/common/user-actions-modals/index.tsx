import { Box } from '@mui/system';
import { FC, Fragment } from 'react';
import { Actions } from '../../../../types/common/action-buton/actions';

type Props = {
	usersActions: Array<Actions>;
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
