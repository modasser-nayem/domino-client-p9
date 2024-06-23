export type TSidebarMenuItem = {
   label: string;
   icon: React.ReactNode;
   path?: string;
   menus?: {
      path: string;
      name: string;
   }[];
};
