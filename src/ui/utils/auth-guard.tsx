import React, { FC, PropsWithChildren, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Routes } from '../../constants/routes/routes';
import { useAuth } from '../../hooks/auth/use-auth';

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
	const { isAuthorized } = useAuth();
	if (!isAuthorized) {
		return <Navigate to={`${Routes.ROOT_PATH}${Routes.SIGN_IN}`} />;
	}

	return <>{children}</>;
};

AuthGuard.displayName = 'AuthGuard';
