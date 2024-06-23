import { Box } from "@mui/material";
import React from "react";
import DashboardSidebar from "../Dashboard/DashboardSidebar";
import DashboardTopbar from "../Dashboard/DashboardTopbar";
import { Outlet } from "react-router-dom";
import { TSidebarMenuItem } from "../../../types/dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";

type Theme = "light" | "dark";

const AdminLayout = () => {
   const [collapsed, setCollapsed] = React.useState(false);
   const [toggled, setToggled] = React.useState(false);
   const [broken, setBroken] = React.useState(false);
   const [theme] = React.useState<Theme>("dark");

   const menuItems: TSidebarMenuItem[] = [
      {
         label: "Dashboard",
         icon: <DashboardIcon />,
         path: "/admin",
      },
      {
         label: "User Management",
         icon: <PeopleIcon />,
         menus: [
            {
               name: "All Users",
               path: "all-users",
            },
            {
               name: "All Instructors",
               path: "all-instructors",
            },
         ],
      },
   ];

   return (
      <div
         style={{
            display: "flex",
            height: "100%",
         }}
      >
         <DashboardSidebar
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            toggled={toggled}
            setToggled={setToggled}
            broken={broken}
            setBroken={setBroken}
            theme={theme}
            menuItems={menuItems}
         />

         {/* main */}
         <Box width="100%">
            <DashboardTopbar
               collapsed={collapsed}
               setCollapsed={setCollapsed}
               toggled={toggled}
               setToggled={setToggled}
               broken={broken}
            />
            <Box p={3}>
               <Outlet />
            </Box>
         </Box>
      </div>
   );
};

export default AdminLayout;
