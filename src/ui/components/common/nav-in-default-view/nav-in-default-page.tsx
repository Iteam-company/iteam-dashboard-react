import { Link } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AdminRoutes } from '../../../../constants/routes/application-routes/admin-routes';
import { CommontRoutes } from '../../../../constants/routes/application-routes/common-routes';

type Props = {
	navigateRoute?: Array<CommontRoutes | AdminRoutes>;
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
