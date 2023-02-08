import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "../../api/auth";
import { useAppDispatch } from "../store/use-app-dispatch-hook";
import { useAppSelector } from "../store/use-app-selector-hook";
import { removeCredentials, selectIsAuthenticated, user } from "../../store/slices/auth-slice";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const authUser = useAppSelector(user);
  const isAuthorized = useSelector(selectIsAuthenticated);
  const [logout, { isLoading: isLogoutLoading, isError: isLogoutError}] = useLogoutMutation();
  const logOut = useCallback(async () => {
    if (!isAuthorized) {
      try {
        await logout(null);
      } catch (error) {
        await logout(null);
        console.log(JSON.stringify(error, null, 2));
      } finally {
        dispatch(removeCredentials())
      }
    }
  }, [isAuthorized, authUser]);
  return useMemo(() => ({isAuthorized}), [isAuthorized, logout]);
}
