import { TRouteItem } from "../types/route";

export const instructorRoutes: TRouteItem[] = [
   {
      name: "Dashboard",
      index: true,
      element: <h1>Instructor Dashboard</h1>,
   },
   {
      name: "My Courses",
      path: "my-courses",
      element: <h1>My Courses inst</h1>,
   },
];
