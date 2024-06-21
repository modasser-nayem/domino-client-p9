import { TRouteItem } from "../types/route";
import HomePage from "../pages/Home/HomePage";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import SignIn from "../pages/Auth/SignIn/SignIn";
import SignUp from "../pages/Auth/SignUp/SignUp";

export const commonRoutes: TRouteItem[] = [
   {
      name: "Home",
      path: "/",
      element: <HomePage />,
   },
   {
      name: "Sign In",
      path: "/sign-in",
      element: <SignIn />,
   },
   {
      name: "Sign Up",
      path: "/sign-up",
      element: <SignUp />,
   },
   {
      name: "Reset Password",
      path: "/reset-password",
      element: <ResetPassword />,
   },
];
