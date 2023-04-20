import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useSignOutMutation } from '../../api/auth';
import { useAppDispatch } from '../store/use-app-dispatch-hook';
import { useAppSelector } from '../store/use-app-selector-hook';
import {
	removeCredentials,
	selectIsAuthenticated,
	selectUser,
} from '../../store/slices/auth-slice';

export const useAuth = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	const isAuthorized = useSelector(selectIsAuthenticated);
	const [logout, { isLoading: isLogoutLoading, isError: isLogoutError }] =
		useSignOutMutation();

	const signOut = useCallback(async () => {
		if (!isAuthorized) {
			try {
				await logout();
			} catch (error) {
				console.log(JSON.stringify(error, null, 2));
			} finally {
				dispatch(removeCredentials());
			}
		}
	}, [isAuthorized, logout, user]);

	const wrapper = useMemo(
		() => ({ isAuthorized, signOut, user, isLogoutLoading, isLogoutError }),
		[isAuthorized, signOut, user, isLogoutLoading, isLogoutError],
	);

	return wrapper;
};
