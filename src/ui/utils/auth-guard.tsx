import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { Routes } from '../../constants/routes/routes';
import useAuth from '../../types/hooks/auth/use-auth';

interface Props {
	children?: React.ReactNode;
}
export const AuthGuard: FC<Props> = (_, children) => {
	const auth = useAuth();
	//const location = useLocation();
	//const [requestedLocation, setRequestedLocation] = useState<null | string>(
	//	null,
	//);
	if (!auth.isAuthorized) {

		return <Navigate to={`${Routes.ROOT_PATH}${Routes.SIGN_IN}`} />;
		//if (location.pathname !== requestedLocation) {
		//	setRequestedLocation(location.pathname);
		//}
		//return <Navigate to={`${Routes.ROOT_PATH}${Routes.SIGN_IN}`} />;
	}

	//if (requestedLocation && location.pathname !== requestedLocation) {
	//	setRequestedLocation(null);
	//	return <Navigate to={`${Routes.ROOT_PATH}${Routes.SIGN_IN}`} />;
	//}

	return children;
	//const { children } = props;
	//return <div>{children}</div>;
};

AuthGuard.displayName = 'AuthGuard';
