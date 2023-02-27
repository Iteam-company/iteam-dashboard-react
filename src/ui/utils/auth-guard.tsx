import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { CommontRoutes } from '../../constants/routes/application-routes/common-routes';
import { useAuth } from '../../hooks/auth/use-auth';

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
	const { isAuthorized } = useAuth();
	if (!isAuthorized) {
		return (
			<Navigate to={`${CommontRoutes.ROOT_PATH}${CommontRoutes.SIGN_IN}`} />
		);
	}

	return <>{children}</>;
};

AuthGuard.displayName = 'AuthGuard';
