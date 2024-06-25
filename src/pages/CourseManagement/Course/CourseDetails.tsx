import { useParams } from "react-router-dom";
import { useGetSingleCourseQuery } from "../../../redux/api/courseApi";
import Loading from "../../../components/shared/Loading/Loading";
import {
   Box,
   Button,
   Chip,
   Container,
   Grid,
   Stack,
   Typography,
} from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { theme } from "../../../lib/theme/theme";
import CourseDetailsTabs from "../../../components/UI/Course/CourseDetailsTabs";

const CourseDetails = () => {
   const params = useParams();
   const courseId = params.id as string;

   const { data, isLoading } = useGetSingleCourseQuery({
      id: courseId,
   });

   const course = data?.data;

   return (
      <Container>
         {isLoading ? (
            <Loading />
         ) : course && data.success ? (
            <Box my={4}>
               <Box>
                  <Grid
                     container
                     flexWrap={{
                        xs: "wrap",
                        md: "nowrap",
                     }}
                     gap={2}
                  >
                     <Grid
                        item
                        xs={12}
                        md={8}
                     >
                        <Box overflow="hidden">
                           <Box
                              component="img"
                              src={course.thumbnail_url}
                              alt={course.title}
                              width="100%"
                              height="100%"
                           />
                        </Box>

                        <Stack
                           my={1}
                           direction={{
                              xs: "column",
                              sm: "row",
                           }}
                           alignItems="center"
                           justifyContent="space-between"
                           gap={2}
                        >
                           <Typography
                              variant="body1"
                              fontWeight={600}
                           >
                              Instructor:{" "}
                              <Typography
                                 variant="inherit"
                                 color="info.main"
                                 component="span"
                              >
                                 {course.instructor.name}
                              </Typography>
                           </Typography>
                           <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="space-between"
                              gap={2}
                           >
                              <Typography
                                 variant="body2"
                                 display="flex"
                                 alignItems="center"
                                 gap={0.5}
                                 color={theme.palette.grey.A700}
                              >
                                 {"53845"} <VisibilityIcon fontSize="small" />
                              </Typography>
                              <Chip
                                 size="medium"
                                 label="Previous"
                                 color="info"
                                 component="span"
                              />
                              <Chip
                                 sx={{ minWidth: 90 }}
                                 size="medium"
                                 label="Next"
                                 color="primary"
                                 component="span"
                              />
                           </Stack>
                        </Stack>
                     </Grid>
                     <Grid
                        item
                        xs={12}
                        md={4}
                     >
                        <Typography
                           textAlign="center"
                           variant="h5"
                           fontWeight={700}
                           textTransform="capitalize"
                           bgcolor="primary.main"
                           color="wheat"
                           padding={1}
                        >
                           {course.priceType === "free" ? (
                              <>
                                 {course.priceType}{" "}
                                 <Typography
                                    component="span"
                                    sx={{
                                       textDecoration: "line-through",
                                    }}
                                 >
                                    {course.price} TK
                                 </Typography>
                              </>
                           ) : (
                              `${course.price} TK`
                           )}
                        </Typography>
                        <Stack
                           my={2}
                           direction="row"
                           alignItems="center"
                           justifyContent="space-between"
                           gap={2}
                           sx={{
                              "& button": {
                                 borderRadius: 0,
                                 fontSize: 14,
                                 fontWeight: 600,
                              },
                           }}
                        >
                           <Button
                              size="large"
                              startIcon={<LocalMallIcon />}
                           >
                              Buy Now
                           </Button>
                           <Button
                              size="large"
                              color="warning"
                              startIcon={<ShoppingCartIcon />}
                           >
                              Add To Card
                           </Button>
                        </Stack>
                        <Box>
                           <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="space-between"
                              gap={2}
                              bgcolor="primary.main"
                              color="wheat"
                              p={2}
                              sx={{
                                 "& p": {
                                    fontSize: 18,
                                    fontWeight: 600,
                                 },
                              }}
                           >
                              <Typography>Course Curriculum</Typography>
                              <Typography
                                 display="flex"
                                 alignItems="center"
                                 gap={0.5}
                              >
                                 <AccessTimeFilledIcon /> 27:31:46
                              </Typography>
                           </Stack>
                        </Box>
                     </Grid>
                  </Grid>
               </Box>
               {/* second */}
               <Box
                  mt={5}
                  maxWidth={700}
               >
                  <CourseDetailsTabs course={course} />
               </Box>
            </Box>
         ) : (
            <Typography>No have any Course</Typography>
         )}
      </Container>
   );
};

export default CourseDetails;
