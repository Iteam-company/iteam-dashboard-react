import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "../../../api/auth";
import { useAppDispatch } from "../../../hooks/store/use-app-dispatch-hook";
import { useAppSelector } from "../../../hooks/store/use-app-selector-hook";
import { removeCredentials, selectIsAuthenticated, user } from "../../../store/slices/auth-slice";


const useAuth = () => {
  const dispatch = useAppDispatch();
  const authUser = useAppSelector(user);
  const isAuthorized = useSelector(selectIsAuthenticated);
  const [logout, { isLoading: isLogoutLoading, isError: isLogoutError}] = useLogoutMutation();
  const logOut = useCallback(async () => {
    if (!isAuthorized) {
      try {
        await logout(null); ////refreshtoken in swager
        dispatch(removeCredentials());
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      }
    }
  }, [isAuthorized, logout, authUser]);

  return useMemo(() => ({isAuthorized, logout}), [isAuthorized, logout]);
}

export default useAuth;
