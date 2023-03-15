import { Button, MenuItem } from '@mui/material';
import { FC, Fragment } from 'react';
import { Actions } from '../../../../../types/common/action-buton/actions';

type Props = {
	usersActions: Array<Actions>;
};

export const UsersActionTitle: FC<Props> = ({ usersActions }) => {
	return (
		<>
			{usersActions?.map((item, i) => (
				<MenuItem key={`${item} - ${i}`} onClick={item.onClick} disableRipple>
					<Button variant='contained' fullWidth>
						{item.title}
					</Button>
				</MenuItem>
			))}
		</>
	);
};
