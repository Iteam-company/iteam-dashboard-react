import { useAppSelector } from '../store/use-app-selector-hook';
import { user as userSelector } from '../../store/slices/auth-slice';
import { useMemo } from 'react';
import { UseAuthType } from '../../types/hooks/auth/use-auth-type';

export const useAuth: () => UseAuthType = () => {
	const user = useAppSelector(userSelector);
	const isSignedIn = useMemo(() => !!user, [user]);

	return { isSignedIn, user };
};
