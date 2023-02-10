import React, { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { Routes } from '../../constants/routes/routes';
import { useAuth } from '../../hooks/auth/use-auth';

export const GuestGuard: FC<PropsWithChildren> = ({ children }) => {
	const { isAuthorized } = useAuth();
	if (isAuthorized) {
		return <Navigate to={Routes.ROOT_PATH} />;
	}

	return <>{children}</>;
};

GuestGuard.displayName = 'AuthGuard';
