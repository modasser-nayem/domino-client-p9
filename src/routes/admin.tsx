import AllInstructorsForAdmin from "../pages/Admin/AllInstructorsForAdmin/AllInstructorsForAdmin";
import AllUsers from "../pages/Admin/AllUsers/AllUsers";
import { TRouteItem } from "../types/route";

export const adminRoutes: TRouteItem[] = [
   {
      name: "Dashboard",
      index: true,
      element: <h1>Admin Dashboard</h1>,
   },
   {
      name: "User Management",
      children: [
         {
            name: "All Users",
            path: "all-users",
            element: <AllUsers />,
         },
         {
            name: "Instructor List",
            path: "all-instructors",
            element: <AllInstructorsForAdmin />,
         },
      ],
   },
   {
      name: "Courses",
      path: "courses",
      element: <h1>Courses</h1>,
   },
];
