import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';
import { FC } from 'react';

type Props = {
	isLoading: boolean;
};

export const Loader: FC<Props> = ({ isLoading }) => (
	<Backdrop
		sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
		open={isLoading}>
		<CircularProgress color='inherit' />
	</Backdrop>
);
