import { Box } from "@mui/material";
import React from "react";
import DashboardSidebar from "../Dashboard/DashboardSidebar";
import DashboardTopbar from "../Dashboard/DashboardTopbar";

type Theme = "light" | "dark";

const AdminLayout = () => {
   const [collapsed, setCollapsed] = React.useState(false);
   const [toggled, setToggled] = React.useState(false);
   const [broken, setBroken] = React.useState(false);
   const [theme, setTheme] = React.useState<Theme>("light");

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
         </Box>
      </div>
   );
};

export default AdminLayout;
