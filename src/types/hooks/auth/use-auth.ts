import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLogoutMutation, useRefreshAccesTokenMutation } from "../../../api/auth";
import { StatusCodes } from "../../../constants/api/status-codes";
import { useAppDispatch } from "../../../hooks/store/use-app-dispatch-hook";
import { useAppSelector } from "../../../hooks/store/use-app-selector-hook";
import { removeCredentials, selectIsAuthenticated, setAccesToken, user } from "../../../store/slices/auth-slice";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const authUser = useAppSelector(user);
  const isAuthorized = useSelector(selectIsAuthenticated);
  const [logout, { isLoading: isLogoutLoading, isError: isLogoutError}] = useLogoutMutation();
  const [newRefreshToken, {isLoading: isRefreshLoading, isError: isRefreshError}] = useRefreshAccesTokenMutation();
  const logOut = useCallback(async () => {
    if (!isAuthorized) {
      try {
        const response = await newRefreshToken(null).unwrap();
        if (response.status === StatusCodes.UNAUHTORIZED) {///error ?
          dispatch(removeCredentials());
        } else {
          dispatch(setAccesToken(response.accessToken));

          //// make get req 
        }
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      }
    }
  }, [isAuthorized, logout, authUser]);
  return useMemo(() => ({isAuthorized, logout}), [isAuthorized, logout]);
}
