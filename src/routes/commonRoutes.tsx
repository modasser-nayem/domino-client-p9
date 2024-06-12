import { TRouteItem } from "../types/route";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import HomePage from "../pages/Home/HomePage";

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
];
