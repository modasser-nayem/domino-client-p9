import { ReactNode } from "react";

export type TRouteItem = {
   name?: string;
   index?: boolean;
   path?: string;
   icon?: ReactNode;
   element?: ReactNode;
   children?: TRouteItem[];
};

export type TDomRoute = {
   path?: string;
   index?: boolean;
   element: ReactNode;
};
