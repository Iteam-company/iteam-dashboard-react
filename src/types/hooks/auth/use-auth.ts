import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "../../../api/auth";
import { useAppDispatch } from "../../../hooks/store/use-app-dispatch-hook";
import { removeCredentials, selectIsAuthenticated, user } from "../../../store/slices/auth-slice";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const userAuth = useSelector(user);
  const isAuthorized = useSelector(selectIsAuthenticated);
  const [logout, { isLoading: isLoginLoading, isError: isLoginError }] = useLogoutMutation();

  const logOut = useCallback(async () => {
    if (!isAuthorized) {
      try {
        await logout(null);
        dispatch(removeCredentials());
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      }
    }
  }, [isAuthorized, logout]);

  return useMemo(() => ({userAuth, isAuthorized, logout}), [userAuth, isAuthorized, logout]);
}

export default useAuth;