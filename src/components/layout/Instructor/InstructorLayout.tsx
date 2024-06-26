import { Box } from "@mui/material";
import React from "react";
import DashboardSidebar from "../Dashboard/DashboardSidebar";
import DashboardTopbar from "../Dashboard/DashboardTopbar";
import { Outlet } from "react-router-dom";
import { TSidebarMenuItem } from "../../../types/dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";

type Theme = "light" | "dark";

const InstructorLayout = () => {
   const [collapsed, setCollapsed] = React.useState(false);
   const [toggled, setToggled] = React.useState(false);
   const [broken, setBroken] = React.useState(false);
   const [theme] = React.useState<Theme>("dark");

   const menuItems: TSidebarMenuItem[] = [
      {
         label: "Dashboard",
         icon: <DashboardIcon />,
         path: "/instructor",
      },
      {
         label: "Course Management",
         icon: <SchoolIcon />,
         menus: [
            {
               name: "My Courses",
               path: "my-courses",
            },
            {
               name: "Courses",
               path: "courses",
            },
            {
               name: "Add New Course",
               path: "add-course",
            },
         ],
      },
   ];

   return (
      <Box
         style={{
            display: "flex",
            height: "100vh",
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
         <Box
            width="100%"
            overflow="scroll"
         >
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
      </Box>
   );
};
export default InstructorLayout;
