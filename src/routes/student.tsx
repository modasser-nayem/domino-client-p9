import { TRouteItem } from "../types/route";

export const studentRoutes: TRouteItem[] = [
   {
      name: "Dashboard",
      index: true,
      element: <h1>Student Dashboard</h1>,
   },
   {
      name: "My Courses",
      path: "my-courses",
      element: <h1>My Courses list</h1>,
   },
];
