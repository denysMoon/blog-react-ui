import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectedUser, verifyJwt } from "@/store/auth/authSlice";
import { useAppDispatch } from "@/store/dispatch";

export const PrivateRoutes = ({ page }: { page: JSX.Element }) => {
  const { isAuthenticated, isSuccess, jwt } = useSelector(selectedUser);
  const dispatch = useAppDispatch();

  // Fix case when reload page and need wait to get to verify jwt

  useEffect(() => {
    if (!jwt || !jwt?.token) return;

    dispatch(verifyJwt(jwt.token));
  }, [jwt, isSuccess, dispatch]);

  console.log(12, isAuthenticated);

  return isAuthenticated ? page : <Navigate replace to="/login" />;
};
