import Search from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, InputBase, Stack } from "@mui/material";

type DashboardTopbarProps = {
   collapsed: boolean;
   setCollapsed: any;
   toggled: boolean;
   setToggled: any;
   broken: boolean;
};

const DashboardTopbar = ({
   broken,
   toggled,
   setToggled,
   collapsed,
   setCollapsed,
}: DashboardTopbarProps) => {
   return (
      <Stack direction="row">
         {broken ? (
            <IconButton onClick={() => setToggled(!toggled)}>
               <MenuIcon />
            </IconButton>
         ) : (
            <IconButton
               onClick={() => setCollapsed(!collapsed)}
               sx={{ display: { xs: "none", md: "block" } }}
            >
               <MenuIcon />
            </IconButton>
         )}
         <InputBase
            sx={{ ml: 2 }}
            placeholder="Search"
         />
         <IconButton
            type="button"
            sx={{ p: 1 }}
         >
            <Search />
         </IconButton>
      </Stack>
   );
};

export default DashboardTopbar;
