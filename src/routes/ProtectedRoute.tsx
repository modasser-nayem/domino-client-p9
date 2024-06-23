import { Navigate } from "react-router-dom";
import { TChildren } from "../types/global";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logOutUser } from "../redux/features/auth/authSlice";

type ProtectRouteProps = {
   role?: "admin" | "instructor" | "student";
} & TChildren;

const ProtectedRoute = ({ children, role }: ProtectRouteProps) => {
   const dispatch = useAppDispatch();

   const user = useAppSelector((state) => state.auth.user);

   if (!user) {
      return (
         <Navigate
            replace
            to="/sign-in"
         />
      );
   }
   if (role && user.role !== role) {
      dispatch(logOutUser());
   }

   return children;
};

export default ProtectedRoute;
