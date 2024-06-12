import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../components/layout/CommonLayout";
import { routesGenerator } from "../utils/routesGenerator";
import { commonRoutes } from "./commonRoutes";

const router = createBrowserRouter([
   {
      path: "/",
      element: <CommonLayout />,
      children: routesGenerator(commonRoutes),
   },
]);

export default router;
