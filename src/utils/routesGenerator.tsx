import { TDomRoute, TRouteItem } from "../types/route";

export const routesGenerator = (routePaths: TRouteItem[]): TDomRoute[] => {
   const routes = routePaths.reduce((acc: TDomRoute[], item) => {
      if (item.path) {
         acc.push({ path: item.path, element: item.element });
      }

      if (item.index) {
         acc.push({ index: item.index, element: item.element });
      }

      if (item.children) {
         item.children.forEach((child) => {
            if (child.path) {
               acc.push({
                  path: child.path,
                  element: child.element,
               });
            }
            if (child.index) {
               acc.push({
                  index: child.index,
                  element: child.element,
               });
            }
         });
      }

      return acc;
   }, []);

   return routes;
};
