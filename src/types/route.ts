import { ReactNode } from "react";

export type TRouteItem = {
   name?: string;
   path?: string;
   icon?: ReactNode;
   element?: ReactNode;
   children?: TRouteItem[];
};

export type TDomRoute = {
   path: string;
   element: ReactNode;
};
