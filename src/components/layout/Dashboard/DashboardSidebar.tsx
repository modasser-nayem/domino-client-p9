import {
   BarChart,
   Book,
   Contrast,
   Diamond,
   Map,
   ShoppingCart,
   Support,
} from "@mui/icons-material";
import { Badge, Box, Stack, Typography } from "@mui/material";
import { CalendarIcon } from "@mui/x-date-pickers";
import React from "react";
import {
   Sidebar,
   Menu,
   MenuItem,
   SubMenu,
   menuClasses,
   MenuItemStyles,
} from "react-pro-sidebar";
import dominoLogo from "../../../assets/domino_logo.png";

const themes = {
   light: {
      sidebar: {
         backgroundColor: "#ffffff",
         color: "#607489",
      },
      menu: {
         menuContent: "#fbfcfd",
         icon: "#0098e5",
         hover: {
            backgroundColor: "#c5e4ff",
            color: "#44596e",
         },
         disabled: {
            color: "#9fb6cf",
         },
      },
   },
   dark: {
      sidebar: {
         backgroundColor: "#0b2948",
         color: "#8ba1b7",
      },
      menu: {
         menuContent: "#082440",
         icon: "#59d0ff",
         hover: {
            backgroundColor: "#00458b",
            color: "#b6c8d9",
         },
         disabled: {
            color: "#3e5e7e",
         },
      },
   },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
   const r = parseInt(hex.slice(1, 3), 16);
   const g = parseInt(hex.slice(3, 5), 16);
   const b = parseInt(hex.slice(5, 7), 16);

   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export type MenuItem = {
   label: string;
   icon: React.ReactNode;
   menus: {
      path: string;
      name: string;
   }[];
};

type DashboardSidebarProps = {
   collapsed: boolean;
   setCollapsed: any;
   toggled: boolean;
   setToggled: any;
   broken: boolean;
   setBroken: any;
   theme: "light" | "dark";
};

const DashboardSidebar = ({
   collapsed,
   toggled,
   setToggled,
   setBroken,
   theme,
}: DashboardSidebarProps) => {
   const menuItemStyles: MenuItemStyles = {
      root: {
         fontSize: "13px",
         fontWeight: 400,
      },
      icon: {
         color: themes[theme].menu.icon,
         [`&.${menuClasses.disabled}`]: {
            color: themes[theme].menu.disabled.color,
         },
      },
      SubMenuExpandIcon: {
         color: "#b6b7b9",
      },
      subMenuContent: ({ level }) => ({
         backgroundColor:
            level === 0
               ? hexToRgba(themes[theme].menu.menuContent, 1)
               : "transparent",
      }),
      button: {
         [`&.${menuClasses.disabled}`]: {
            color: themes[theme].menu.disabled.color,
         },
         "&:hover": {
            backgroundColor: hexToRgba(
               themes[theme].menu.hover.backgroundColor,
               1
            ),
            color: themes[theme].menu.hover.color,
         },
      },
      label: ({ open }) => ({
         fontWeight: open ? 600 : undefined,
      }),
   };

   const menuItems: MenuItem[] = [
      {
         label: "Nayem",
         icon: <Contrast />,
         menus: [
            {
               path: "about",
               name: "About",
            },
            {
               path: "contact",
               name: "Contact",
            },
         ],
      },
   ];

   return (
      <Sidebar
         collapsed={collapsed}
         toggled={toggled}
         onBackdropClick={() => setToggled(false)}
         onBreakPoint={setBroken}
         breakPoint="md"
         backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, 1)}
         rootStyles={{
            color: themes[theme].sidebar.color,
            height: "100vh",
         }}
      >
         <Box
            style={{
               display: "flex",
               flexDirection: "column",
               height: "100%",
            }}
         >
            {/* header */}
            <Stack
               direction="row"
               alignItems="center"
               mt={3}
               mb={2.5}
               pl={3}
            >
               <img
                  src={dominoLogo}
                  alt="domino"
                  style={{
                     width: "28px",
                     height: "28px",
                     marginRight: ".3rem",
                  }}
               />
               <Typography
                  variant="h4"
                  noWrap
                  component="h2"
                  sx={{
                     mr: 2,
                     fontFamily: "monospace",
                     fontWeight: 700,
                     letterSpacing: ".3rem",
                     display: collapsed ? "none" : "block",
                  }}
               >
                  omino
               </Typography>
            </Stack>
            <div style={{ flex: 1, marginBottom: "32px" }}>
               {/* <div style={{ padding: "0 24px", marginBottom: "8px" }}>
                  <Typography
                     variant="body2"
                     fontWeight={600}
                     style={{
                        opacity: collapsed ? 0 : 0.7,
                        letterSpacing: "0.5px",
                     }}
                  >
                     General
                  </Typography>
               </div> */}
               <Menu menuItemStyles={menuItemStyles}>
                  {menuItems.map((menu) => (
                     <SubMenu
                        label={menu.label}
                        icon={menu.icon}
                     >
                        {menu.menus.map((submenu) => (
                           <MenuItem href={submenu.path}>
                              {submenu.name}
                           </MenuItem>
                        ))}
                     </SubMenu>
                  ))}
                  {/* <SubMenu
                     label="Components"
                     icon={<Diamond />}
                  >
                     <MenuItem> Grid</MenuItem>
                     <MenuItem> Layout</MenuItem>
                     <SubMenu label="Forms">
                        <MenuItem> Select</MenuItem>
                        <SubMenu label="More">
                           <MenuItem> CheckBox</MenuItem>
                           <MenuItem> Radio</MenuItem>
                        </SubMenu>
                     </SubMenu>
                  </SubMenu> */}
               </Menu>
            </div>
         </Box>
      </Sidebar>
   );
};

export default DashboardSidebar;