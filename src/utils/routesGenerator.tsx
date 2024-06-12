import { TDomRoute, TRouteItem } from "../types/route";

export const routesGenerator = (routePaths: TRouteItem[]): TDomRoute[] => {
   const routes = routePaths.reduce((acc: TDomRoute[], item) => {
      if (item.path) {
         acc.push({ path: item.path, element: item.element });
      }

      if (item.children) {
         item.children.forEach((child) => {
            acc.push({
               path: child.path!,
               element: child.element,
            });
         });
      }

      return acc;
   }, []);

   return routes;
};
