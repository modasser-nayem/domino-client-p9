import {
   FacebookOutlined,
   Instagram,
   LinkedIn,
   YouTube,
} from "@mui/icons-material";
import {
   Box,
   Container,
   Divider,
   Grid,
   Stack,
   Typography,
   useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import dominoLogo from "../../../assets/domino_logo.png";

const Footer = () => {
   const theme = useTheme();
   return (
      <Box
         bgcolor={theme.palette.primary.main}
         color="white"
         padding={5}
      >
         <Container>
            <Grid
               container
               spacing={4}
               xl="auto"
            >
               <Grid
                  item
                  sm={12}
                  md={6}
               >
                  <Stack
                     direction="row"
                     spacing={1}
                     alignItems="center"
                  >
                     <img
                        style={{
                           width: "35px",
                           height: "35px",
                        }}
                        src={dominoLogo}
                        alt="domino.logo"
                     />
                     <Typography
                        variant="h5"
                        component="h1"
                        textTransform="uppercase"
                     >
                        Domino
                     </Typography>
                  </Stack>
                  <Typography
                     variant="body1"
                     component="p"
                     my={3}
                  >
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Vero laudantium repellat tenetur, alias explicabo
                     consequuntur debitis dicta quisquam facere, amet assumenda
                     tempore! Odit veniam totam possimus deserunt modi explicabo
                     commodi.
                  </Typography>
                  <Box>
                     <Typography
                        variant="h6"
                        component="h4"
                        mb={1}
                     >
                        Contact Us
                     </Typography>
                     <Typography variant="body1">
                        +8801872657534, +8801880087236, +880188084574
                     </Typography>
                  </Box>
               </Grid>
               <Grid
                  item
                  sm={6}
                  md={3}
               >
                  <Typography
                     variant="h6"
                     component="h4"
                  >
                     Useful Links
                  </Typography>
                  <Divider sx={{ bgcolor: "white", my: 2 }} />
                  <Stack
                     gap={1}
                     sx={{
                        "& a": {
                           textDecoration: "none",
                           color: theme.palette.grey.A100,
                           ":hover": {
                              color: "wheat",
                           },
                        },
                     }}
                  >
                     <Link to="/">Blog</Link>
                     <Link to="/">Become A Instructor</Link>
                     <Link to="/">Course Categories</Link>
                     <Link to="/register">Create An Account</Link>
                     <Link to="/">Privacy Policy</Link>
                  </Stack>
               </Grid>
               <Grid
                  item
                  sm={6}
                  md={3}
               >
                  <Typography
                     variant="h6"
                     component="h4"
                  >
                     Need Support
                  </Typography>
                  <Divider sx={{ bgcolor: "white", my: 2 }} />
                  <Stack
                     gap={1}
                     sx={{
                        "& a": {
                           textDecoration: "none",
                           color: theme.palette.grey.A100,
                           ":hover": {
                              color: "wheat",
                           },
                        },
                     }}
                  >
                     <Link to="/">Contact Us</Link>
                     <Link to="/">FAQ</Link>
                     <Link to="/">How it work</Link>
                  </Stack>
                  <Typography
                     variant="h6"
                     component="h4"
                     my={2}
                  >
                     Follow Us
                  </Typography>
                  <Divider sx={{ bgcolor: "white", my: 2 }} />
                  <Stack
                     direction="row"
                     gap={3}
                     sx={{
                        "& a": {
                           textDecoration: "none",
                           color: theme.palette.grey.A100,
                           ":hover": {
                              color: "wheat",
                           },
                        },
                     }}
                  >
                     <Link to="/">
                        <FacebookOutlined fontSize="large" />
                     </Link>
                     <Link to="/">
                        <Instagram fontSize="large" />
                     </Link>
                     <Link to="/">
                        <LinkedIn fontSize="large" />
                     </Link>
                     <Link to="/">
                        <YouTube fontSize="large" />
                     </Link>
                  </Stack>
               </Grid>
            </Grid>
            <Divider sx={{ bgcolor: "white", my: 4 }} />
            <Typography
               component="p"
               align="center"
               color="white"
            >
               &copy; All Rights Reserved by{" "}
               <Link
                  to="/"
                  style={{ textDecoration: "none", color: "wheat" }}
               >
                  Domino
               </Link>{" "}
               | 2024
            </Typography>
         </Container>
      </Box>
   );
};

export default Footer;
