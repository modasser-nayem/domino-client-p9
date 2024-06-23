import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { TChildren } from "../types/global";

const OnLoginProtected = ({ children }: TChildren) => {
   const user = useAppSelector((state) => state.auth.user);

   if (user) {
      return (
         <Navigate
            replace
            to="/"
         />
      );
   }

   return children;
};

export default OnLoginProtected;
