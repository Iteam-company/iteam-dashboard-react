import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { CommontRoutes } from '../../constants/common/routes/common-routes';
import { useAuth } from '../../hooks/auth/use-auth';

export const GuestGuard: FC<PropsWithChildren> = ({ children }) => {
	const { isAuthorized } = useAuth();
	if (isAuthorized) {
		return <Navigate to={CommontRoutes.ROOT_PATH} />;
	}

	return <>{children}</>;
};

GuestGuard.displayName = 'AuthGuard';
