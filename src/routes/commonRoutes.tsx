import { TRouteItem } from "../types/route";
import HomePage from "../pages/Home/HomePage";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import SignIn from "../pages/Auth/SignIn/SignIn";
import SignUp from "../pages/Auth/SignUp/SignUp";
import UpdateProfile from "../pages/User/UpdateProfile/UpdateProfile";
import Profile from "../pages/User/Profile/Profile";
import ProtectedRoute from "./ProtectedRoute";
import OnLoginProtected from "./OnLoginProtected";
import UserDetails from "../pages/User/UserDetails/UserDetails";
import CourseDetails from "../pages/CourseManagement/Course/CourseDetails";

export const commonRoutes: TRouteItem[] = [
   {
      name: "Home",
      path: "/",
      element: <HomePage />,
   },
   {
      name: "Sign In",
      path: "/sign-in",
      element: (
         <OnLoginProtected>
            <SignIn />
         </OnLoginProtected>
      ),
   },
   {
      name: "Sign Up",
      path: "/sign-up",
      element: (
         <OnLoginProtected>
            <SignUp />
         </OnLoginProtected>
      ),
   },
   {
      name: "Reset Password",
      path: "/reset-password",
      element: (
         <OnLoginProtected>
            <ResetPassword />
         </OnLoginProtected>
      ),
   },
   {
      name: "Profile",
      path: "/profile",
      element: (
         <ProtectedRoute>
            <Profile />
         </ProtectedRoute>
      ),
   },
   {
      name: "Update Profile",
      path: "/update-profile",
      element: (
         <ProtectedRoute>
            <UpdateProfile />
         </ProtectedRoute>
      ),
   },
   {
      name: "User Details",
      path: "user-details/:id",
      element: <UserDetails />,
   },
   {
      name: "Course Details",
      path: "course-details/:id",
      element: <CourseDetails />,
   },
];
