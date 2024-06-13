import { TRouteItem } from "../types/route";

export const dashboardRoutes: TRouteItem[] = [
   {
      name: "Dashboard",
      index: true,
      element: <h1>Dashboard</h1>,
   },
   {
      path: "admin",
      element: <h1>My Courses</h1>,
   },
];
