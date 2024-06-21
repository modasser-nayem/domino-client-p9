import {
   AppBar,
   Avatar,
   Box,
   Button,
   Container,
   IconButton,
   InputBase,
   Menu,
   MenuItem,
   Stack,
   Toolbar,
   Tooltip,
   Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import dominoLogo from "../../../assets/domino_logo.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { logOutUser } from "../../../redux/features/auth/authSlice";

const Search = styled("div")(({ theme }) => ({
   position: "relative",
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: "100%",
   [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
   },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: "100%",
   position: "absolute",
   pointerEvents: "none",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: "inherit",
   "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
         width: "20ch",
      },
   },
}));

const Navbar = () => {
   const user = useAppSelector((state) => state.auth.user);
   const dispatch = useAppDispatch();

   const settings = [{ name: "Profile", path: "/profile" }];

   const navLinks = [
      {
         path: "/",
         name: "Home",
      },
      {
         path: "#about",
         name: "About",
      },
      {
         path: "#contact",
         name: "Contact",
      },
      {
         path: "#blog",
         name: "Blog",
      },
   ];

   if (user?.role) {
      navLinks.push({
         path: `/${user.role}`,
         name: "Dashboard",
      });
      settings.push({ name: "Dashboard", path: `/${user.role}` });
   }

   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
      null
   );

   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   const [isOpenNav, setIsOpenNav] = useState(false);

   const handleCloseNavMenu = () => {
      setIsOpenNav(false);
   };

   const handleLogoutUser = () => {
      dispatch(logOutUser());
      handleCloseUserMenu();
   };

   return (
      <AppBar
         position="static"
         color="transparent"
         sx={{
            py: 1,
         }}
      >
         <Container>
            <Toolbar
               disableGutters
               sx={{ position: "relative" }}
            >
               <Box
                  sx={{
                     flexGrow: 1,
                     display: "flex",
                     alignItems: "center",
                     gap: { xs: 0, lg: 3 },
                  }}
               >
                  <Link
                     to="/"
                     style={{ textDecoration: "none", color: "inherit" }}
                  >
                     <Stack
                        direction="row"
                        alignItems="center"
                        sx={{ display: { xs: "flex" } }}
                     >
                        <img
                           src={dominoLogo}
                           alt="domino"
                           style={{
                              width: "30px",
                              height: "30px",
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
                           }}
                        >
                           omino
                        </Typography>
                     </Stack>
                  </Link>

                  <Search
                     sx={{
                        display: {
                           xs: "none",
                           lg: "block",
                           border: "1px solid",
                        },
                     }}
                  >
                     <SearchIconWrapper>
                        <SearchIcon />
                     </SearchIconWrapper>
                     <StyledInputBase
                        placeholder="Search course..."
                        inputProps={{ "aria-label": "search" }}
                     />
                  </Search>
               </Box>

               <Box
                  sx={{
                     flexGrow: 0,
                     display: { xs: "none", md: "flex", alignItems: "center" },
                     gap: { xs: 5, lg: 10 },
                  }}
               >
                  <Stack
                     direction="row"
                     alignItems="center"
                     gap={5}
                  >
                     {navLinks.map((item, i) => (
                        <Link
                           key={i}
                           to={item.path}
                           onClick={handleCloseNavMenu}
                           style={{ textDecoration: "none" }}
                        >
                           <Typography
                              sx={{
                                 color: "primary.main",
                                 fontWeight: 600,
                                 fontSize: "16px",
                              }}
                           >
                              {item.name}
                           </Typography>
                        </Link>
                     ))}
                  </Stack>
                  <Stack>
                     {!user ? (
                        <Stack
                           direction="row"
                           alignItems="center"
                           gap={2}
                        >
                           <Link to="/sign-in">
                              <Button variant="outlined">Sing In</Button>
                           </Link>
                           <Link to="/sign-up">
                              <Button>Sing Up</Button>
                           </Link>
                        </Stack>
                     ) : (
                        <Box sx={{ flexGrow: 0 }}>
                           <Tooltip title="Open settings">
                              <IconButton
                                 onClick={handleOpenUserMenu}
                                 sx={{ p: 0 }}
                              >
                                 <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                 />
                              </IconButton>
                           </Tooltip>
                           <Menu
                              sx={{ mt: "45px" }}
                              id="menu-appbar"
                              anchorEl={anchorElUser}
                              anchorOrigin={{
                                 vertical: "top",
                                 horizontal: "right",
                              }}
                              keepMounted
                              transformOrigin={{
                                 vertical: "top",
                                 horizontal: "right",
                              }}
                              open={Boolean(anchorElUser)}
                              onClose={handleCloseUserMenu}
                           >
                              {settings.map((setting, i) => (
                                 <MenuItem
                                    key={i}
                                    onClick={handleCloseUserMenu}
                                 >
                                    <Link
                                       style={{
                                          textAlign: "center",
                                          textDecoration: "none",
                                          color: "inherit",
                                       }}
                                       to={setting.path}
                                    >
                                       {setting.name}
                                    </Link>
                                 </MenuItem>
                              ))}
                              <MenuItem onClick={handleLogoutUser}>
                                 <Typography
                                    color="red"
                                    textAlign="center"
                                 >
                                    Logout
                                 </Typography>
                              </MenuItem>
                           </Menu>
                        </Box>
                     )}
                  </Stack>
               </Box>

               {/* ============ start responsive ============= */}
               <IconButton
                  onClick={() => setIsOpenNav(!isOpenNav)}
                  sx={{ display: { xs: "block", md: "none" } }}
               >
                  {isOpenNav ? <CloseIcon /> : <MenuIcon />}
               </IconButton>

               {isOpenNav && (
                  <Box
                     position="absolute"
                     top={73}
                     left={0}
                     zIndex={999}
                     width="80%"
                     padding={4}
                     sx={{
                        display: {
                           xs: "flex",
                           md: "none",
                           flexDirection: "column",
                           alignItems: "center",
                           gap: 20,
                        },
                        bgcolor: "wheat",
                     }}
                  >
                     <Stack
                        direction="column"
                        alignItems="center"
                        gap={3}
                     >
                        {navLinks.map((item, i) => (
                           <Link
                              key={i}
                              to={item.path}
                              onClick={handleCloseNavMenu}
                              style={{ textDecoration: "none" }}
                           >
                              <Typography
                                 sx={{
                                    color: "primary.main",
                                    fontWeight: 600,
                                    fontSize: "16px",
                                 }}
                              >
                                 {item.name}
                              </Typography>
                           </Link>
                        ))}
                     </Stack>
                     <Stack>
                        {!user ? (
                           <Stack
                              direction="row"
                              alignItems="center"
                              gap={2}
                           >
                              <Link to="/sign-in">
                                 <Button variant="outlined">Sing In</Button>
                              </Link>
                              <Link to="/sign-up">
                                 <Button>Sing Up</Button>
                              </Link>
                           </Stack>
                        ) : (
                           <Box>
                              <Tooltip title="Open settings">
                                 <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                 >
                                    <Avatar
                                       alt="Remy Sharp"
                                       src="/static/images/avatar/2.jpg"
                                    />
                                 </IconButton>
                              </Tooltip>
                              <Menu
                                 sx={{ mt: "45px" }}
                                 id="menu-appbar"
                                 anchorEl={anchorElUser}
                                 anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                 }}
                                 keepMounted
                                 transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                 }}
                                 open={Boolean(anchorElUser)}
                                 onClose={handleCloseUserMenu}
                              >
                                 {settings.map((setting, i) => (
                                    <MenuItem
                                       key={i}
                                       onClick={handleCloseUserMenu}
                                    >
                                       <Link
                                          style={{
                                             textAlign: "center",
                                             textDecoration: "none",
                                             color: "inherit",
                                          }}
                                          to={setting.path}
                                       >
                                          {setting.name}
                                       </Link>
                                    </MenuItem>
                                 ))}
                                 <MenuItem onClick={handleLogoutUser}>
                                    <Typography
                                       color="red"
                                       textAlign="center"
                                    >
                                       Logout
                                    </Typography>
                                 </MenuItem>
                              </Menu>
                           </Box>
                        )}
                     </Stack>
                  </Box>
               )}
               {/* ============ end responsive ============= */}
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Navbar;
