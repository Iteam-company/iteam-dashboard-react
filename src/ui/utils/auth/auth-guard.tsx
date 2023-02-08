import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { Routes } from '../../../constants/routes/routes';
import { useAuth } from '../../../hooks/auth-hooks.ts/use-auth';

interface Props {
	children:  JSX.Element;
}

export const AuthGuard: FC<Props> = ({children}) => {
	const auth = useAuth();

	if (!auth.isAuthorized) {
		return <Navigate to={`${Routes.ROOT_PATH}${Routes.SIGN_IN}`} />;
	}

	return children;
};

AuthGuard.displayName = 'AuthGuard';
