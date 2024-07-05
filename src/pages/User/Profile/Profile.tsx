import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetMyProfileQuery } from "../../../redux/api/userApi";
import {
   FacebookOutlined,
   Language,
   LinkedIn,
   Twitter,
   YouTube,
} from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import moment from "moment";
import Loading from "../../../components/shared/Loading/Loading";

const Profile = () => {
   const { data } = useGetMyProfileQuery(undefined);

   const profile = data?.data;

   return (
      <Container sx={{ my: 10 }}>
         <>
            {!profile ? (
               <Loading />
            ) : (
               <Box>
                  <Box
                     boxShadow={15}
                     p={5}
                     display="flex"
                     gap={5}
                     maxWidth={900}
                  >
                     <Stack
                        alignItems="center"
                        gap={2}
                     >
                        {profile.user?.profileImg ? (
                           <Box
                              src={profile.user?.profileImg}
                              alt={profile.user.name}
                              component="img"
                              sx={{
                                 width: 197,
                                 height: 197,
                                 borderRadius: "50%",
                                 border: "6px solid",
                                 borderColor: "primary.main",
                              }}
                           />
                        ) : (
                           <Box
                              bgcolor="primary.main"
                              component="div"
                              sx={{
                                 width: 200,
                                 height: 200,
                                 borderRadius: "50%",
                                 display: "flex",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 fontSize: "2rem",
                                 color: "wheat",
                              }}
                           >
                              {profile.user.name.split(" ")[0]}
                           </Box>
                        )}
                        <Stack
                           direction="row"
                           gap={1}
                           sx={{
                              "& a": {
                                 bgcolor: "primary.main",
                                 borderRadius: "50%",
                                 p: 1,
                                 color: "wheat",
                                 width: "20px",
                                 height: "20px",
                                 display: "flex",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 ":hover": {
                                    color: "secondary.main",
                                 },
                              },
                           }}
                        >
                           <Link to="/">
                              <FacebookOutlined fontSize="medium" />
                           </Link>
                           <Link to="/">
                              <Twitter fontSize="medium" />
                           </Link>
                           <Link to="/">
                              <LinkedIn fontSize="medium" />
                           </Link>
                           <Link to="/">
                              <YouTube fontSize="medium" />
                           </Link>
                           <Link to="/">
                              <Language fontSize="medium" />
                           </Link>
                        </Stack>
                     </Stack>
                     <Stack>
                        <Typography
                           variant="h5"
                           component="h1"
                           sx={{
                              fontWeight: 700,
                              color: "primary.main",
                           }}
                        >
                           {profile.user.name}
                        </Typography>
                        <Typography
                           variant="subtitle1"
                           component="h4"
                           mb={2}
                        >
                           {profile?.designation}
                        </Typography>
                        <Box
                           sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 0.5,
                           }}
                        >
                           <Typography>
                              Age:{" "}
                              {profile.dateOfBirth
                                 ? moment(profile.dateOfBirth).format(
                                      "DD-MM-YYYY"
                                   )
                                 : "Not Provided"}
                           </Typography>
                           <Typography>
                              Gender:{" "}
                              {profile.gender
                                 ? profile.gender.toUpperCase()
                                 : "Not Provided"}
                           </Typography>
                           <Typography>
                              Blood Group:{" "}
                              {profile.bloodGroup
                                 ? profile.bloodGroup
                                 : "Not Provided"}
                           </Typography>
                           <Stack
                              direction="row"
                              alignContent="center"
                              color="primary.main"
                              gap={1}
                           >
                              <Box component="span">
                                 <EmailIcon fontSize="small" />
                              </Box>
                              <Typography
                                 variant="body1"
                                 component="span"
                              >
                                 {profile.user.email}
                              </Typography>
                           </Stack>
                           <Stack
                              direction="row"
                              alignContent="center"
                              color="primary.main"
                              gap={1}
                           >
                              <Box component="span">
                                 <PhoneIcon fontSize="small" />
                              </Box>
                              <Typography
                                 variant="body1"
                                 component="span"
                              >
                                 {profile.contactNo
                                    ? profile.contactNo
                                    : "Not Provided"}
                              </Typography>
                           </Stack>
                           {profile?.address && (
                              <Stack
                                 direction="row"
                                 alignContent="center"
                                 color="primary.main"
                                 gap={1}
                              >
                                 <Box component="span">
                                    <LocationOnIcon fontSize="small" />
                                 </Box>
                                 <Typography
                                    variant="body1"
                                    component="span"
                                 >
                                    {profile?.address?.district},{" "}
                                    {profile?.address?.country}
                                 </Typography>
                              </Stack>
                           )}
                        </Box>
                     </Stack>
                     <Stack flex={1}>
                        <Typography
                           variant="h5"
                           component="h2"
                           sx={{
                              fontWeight: 700,
                           }}
                        >
                           About
                        </Typography>
                        <Typography component="p">{profile.about}</Typography>
                     </Stack>
                  </Box>
                  <Box
                     my={5}
                     boxShadow={15}
                     maxWidth={500}
                  >
                     <Typography
                        variant="h5"
                        component="h4"
                        sx={{
                           fontWeight: 700,
                           textTransform: "uppercase",
                           px: 3,
                           py: 2,
                           bgcolor: "primary.main",
                           color: "wheat",
                        }}
                     >
                        Education And Skills
                     </Typography>
                     <Stack
                        p={5}
                        direction="column"
                        gap={4}
                     >
                        <Box>
                           <Typography
                              variant="h6"
                              component="h5"
                              sx={{
                                 fontWeight: 800,
                                 textTransform: "uppercase",
                              }}
                           >
                              Education
                           </Typography>
                           <Box>
                              <Typography
                                 sx={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: "grey",
                                 }}
                              >
                                 Institute: {profile.education?.institute}
                              </Typography>
                              <Typography>
                                 Subject: {profile.education?.subject}
                              </Typography>
                              <Typography>
                                 Start Year:{" "}
                                 {moment(profile.education?.startYear).format(
                                    "YYYY"
                                 )}
                              </Typography>
                              <Typography>
                                 Passing Year:{" "}
                                 {profile.education?.passingYear &&
                                    moment(
                                       profile.education?.passingYear
                                    ).format("YYYY")}
                              </Typography>
                              <Typography>
                                 Status:{" "}
                                 {profile.education?.isComplete
                                    ? "Pass"
                                    : "Running"}
                              </Typography>
                           </Box>
                        </Box>
                        <Box>
                           <Typography
                              variant="h6"
                              component="h5"
                              sx={{
                                 fontWeight: 800,
                                 textTransform: "uppercase",
                              }}
                           >
                              Skills
                           </Typography>
                           <Stack
                              mt={1}
                              direction="row"
                              flexWrap="wrap"
                              gap={1.5}
                           >
                              {profile?.skills.map((item, i) => (
                                 <Chip
                                    key={i}
                                    label={item}
                                 />
                              ))}
                           </Stack>
                        </Box>
                        <Box>
                           <Typography
                              variant="h6"
                              component="h5"
                              sx={{
                                 fontWeight: 800,
                                 textTransform: "uppercase",
                              }}
                           >
                              Languages
                           </Typography>
                           <Stack
                              mt={1}
                              direction="column"
                              gap={1}
                           >
                              {profile?.language &&
                                 Object.entries(profile.language).map(
                                    (item, i) => (
                                       <Typography
                                          key={i}
                                          sx={{
                                             display: "flex",
                                          }}
                                       >
                                          <Typography
                                             component="span"
                                             sx={{
                                                fontWeight: 600,
                                                color: "gray",
                                             }}
                                          >
                                             {item[0]}
                                          </Typography>{" "}
                                          - {item[1]}
                                       </Typography>
                                    )
                                 )}
                           </Stack>
                        </Box>
                     </Stack>
                  </Box>
               </Box>
            )}

            <Link to={`/update-profile`}>Update Profile</Link>
         </>
      </Container>
   );
};

export default Profile;
