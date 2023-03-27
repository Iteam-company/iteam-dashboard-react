import { Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
	title?: string;
};
export const DefaultTitle: FC<Props> = ({ title }) => {
	return (
		<Typography
			sx={{ color: '#818589', textTransform: 'upperCase', fontWeight: '600' }}>
			{title}
		</Typography>
	);
};
