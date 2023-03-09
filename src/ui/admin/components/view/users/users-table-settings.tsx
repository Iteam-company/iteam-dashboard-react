import { Box } from '@mui/material';
import { FC } from 'react';
type Props = {
	ButtonEdit?: JSX.Element;
	ButtonDelete?: JSX.Element;
};

export const UserTableSettings: FC<Props> = ({ ButtonEdit, ButtonDelete }) => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			{ButtonEdit}
			{ButtonDelete}
		</Box>
	);
};
