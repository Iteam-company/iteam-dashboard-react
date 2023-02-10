import React, { FC, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Routes } from '../../constants/routes/routes';
import { useAuth } from '../../hooks/auth/use-auth';

interface Props {
	children?: React.ReactNode;
}
export const AuthGuard: FC<Props> = (_, children) => {
	const auth = useAuth();
	const location = useLocation();
	const [requestedLocation, setRequestedLocation] = useState<null | string>(
		null,
	);
	if (!auth.isAuthorized) {
		if (location.pathname !== requestedLocation) {
			setRequestedLocation(location.pathname);
		}
		return <Navigate to={`${Routes.ROOT_PATH}${Routes.SIGN_IN}`} />;
	}

	return children;
};

AuthGuard.displayName = 'AuthGuard';
