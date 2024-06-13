import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../components/layout/CommonLayout";
import { routesGenerator } from "../utils/routesGenerator";
import { commonRoutes } from "./commonRoutes";
import StudentLayout from "../components/layout/Student/StudentLayout";
import { dashboardRoutes } from "./dashboard";
import ProtectedRoute from "./ProtectedRoute";
import InstructorLayout from "../components/layout/Instructor/InstructorLayout";
import { instructorRoutes } from "./instructor";
import AdminLayout from "../components/layout/Admin/AdminLayout";
import { adminRoutes } from "./admin";

const router = createBrowserRouter([
   {
      path: "/",
      element: <CommonLayout />,
      children: routesGenerator(commonRoutes),
   },
   {
      path: "/student",
      element: (
         <ProtectedRoute role="student">
            <StudentLayout />
         </ProtectedRoute>
      ),
      children: routesGenerator(dashboardRoutes),
   },
   {
      path: "/instructor",
      element: (
         <ProtectedRoute role="instructor">
            <InstructorLayout />
         </ProtectedRoute>
      ),
      children: routesGenerator(instructorRoutes),
   },
   {
      path: "/admin",
      element: (
         <ProtectedRoute role="admin">
            <AdminLayout />
         </ProtectedRoute>
      ),
      children: routesGenerator(adminRoutes),
   },
]);

export default router;
