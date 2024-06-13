import { TRouteItem } from "../types/route";

export const adminRoutes: TRouteItem[] = [
   {
      name: "Dashboard",
      index: true,
      element: <h1>Admin Dashboard</h1>,
   },
   {
      name: "Courses",
      path: "courses",
      element: <h1>Courses</h1>,
   },
];
