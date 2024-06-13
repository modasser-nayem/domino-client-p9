import { Navigate } from "react-router-dom";
import { TChildren } from "../types/global";
import { useAppDispatch } from "../redux/hooks";
import { logOutUser } from "../redux/features/auth/authSlice";

type ProtectRouteProps = {
   role: "admin" | "instructor" | "student";
} & TChildren;

const ProtectedRoute = ({ children, role }: ProtectRouteProps) => {
   const dispatch = useAppDispatch();

   const user: { role: "admin" | "instructor" | "student" } = {
      role: "student",
   };

   // const user = null;

   if (!user) {
      return (
         <Navigate
            replace
            to="/sign-in"
         />
      );
   }
   if (user.role !== role) {
      dispatch(logOutUser());
   }

   return children;
};

export default ProtectedRoute;
