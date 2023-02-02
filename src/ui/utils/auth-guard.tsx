import React, { FC, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../types/hooks/auth/use-auth';
import { SignIn } from '../components/authorization/sign-in';
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
		return <SignIn />;
	}

	if (requestedLocation && location.pathname !== requestedLocation) {
		setRequestedLocation(null);
		return <Navigate to='/sign-in' />;
	}

	return children;
	//const { children } = props;
	//return <div>{children}</div>;
};

AuthGuard.displayName = 'AuthGuard';
