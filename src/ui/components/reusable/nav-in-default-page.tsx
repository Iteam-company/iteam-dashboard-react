import { Link } from '@mui/material';
import { FC } from 'react';
import { Routes } from '../../../constants/routes/routes';
import { Link as RouterLink } from 'react-router-dom';

type Props = {
	navigateRoute?: Array<Routes>;
};

export const NavInDefaultPage: FC<Props> = ({ navigateRoute }) => {
	return (
		<>
			{navigateRoute &&
				navigateRoute.map((item, i) => (
					<Link
						key={`${item}-${i}`}
						component={RouterLink}
						to={item}
						sx={{
							mr: 2,
							textTransform: 'uppercase',
							textDecoration: 'none',
							fontWeight: '500',
							'&:hover': { color: '#818589' },
						}}>
						{item}
					</Link>
				))}
		</>
	);
};
