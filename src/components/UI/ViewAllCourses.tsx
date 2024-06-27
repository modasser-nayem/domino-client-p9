import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { useGetAllCourseQuery } from "../../redux/api/courseApi";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Loading from "../shared/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { COURSE_STATUS } from "../../constant/course";

const ViewAllCourses = () => {
   const navigate = useNavigate();

   const user = useAppSelector((state) => state.auth.user);

   const { data, isLoading } = useGetAllCourseQuery(undefined);

   const courses = data?.data;

   const handleByNowClick = () => {
      if (!user) {
         navigate("/sign-up");
      }
   };

   return (
      <>
         {isLoading ? (
            <Loading />
         ) : courses && courses.length > 0 ? (
            <Box
               component="div"
               display="flex"
               flexWrap="wrap"
               gap={4}
            >
               {courses.map((course) => (
                  <Box
                     key={course._id}
                     component="div"
                     width={300}
                     boxShadow={15}
                  >
                     <Link
                        to={`/course-details/${course._id}`}
                        style={{ textDecoration: "none" }}
                     >
                        <Box
                           sx={{
                              position: "relative",
                              width: "100%",
                              height: { xs: 180, sm: 220 },
                              maxHeight: 220,
                              overflow: "hidden",
                              ":hover .overlay": {
                                 opacity: 1,
                              },
                           }}
                        >
                           <Box
                              component="img"
                              src={course.thumbnail_url}
                              alt={course.title}
                              width="100%"
                              height="100%"
                              sx={{
                                 display: "block",
                                 transition: "transform 0.3s",
                                 ":hover": {
                                    transform: "scale(1.05)",
                                 },
                              }}
                           />
                           <Box
                              className="overlay"
                              sx={{
                                 position: "absolute",
                                 top: 0,
                                 left: 0,
                                 width: "100%",
                                 height: "100%",
                                 bgcolor: "rgba(0, 0, 0, 0.7)",
                                 color: "white",
                                 display: "flex",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 opacity: 0,
                                 transition: "opacity 0.3s",
                              }}
                           >
                              <Typography
                                 variant="h6"
                                 component="div"
                              >
                                 <VisibilityIcon fontSize="large" />
                              </Typography>
                           </Box>
                        </Box>
                     </Link>
                     <Box p={1.5}>
                        <Typography
                           component="h2"
                           fontSize={18}
                           fontWeight={600}
                        >
                           {course.title}
                        </Typography>
                        <Stack
                           my={1.5}
                           direction="column"
                           gap={1}
                        >
                           <Typography
                              variant="body2"
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

                           <Typography
                              variant="body2"
                              fontWeight={600}
                           >
                              Language:{" "}
                              <Typography
                                 variant="inherit"
                                 color="gray"
                                 component="span"
                              >
                                 {course.language}
                              </Typography>
                           </Typography>
                           <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="space-between"
                           >
                              <Typography fontWeight={600}>
                                 Level:{" "}
                                 <Chip
                                    size="small"
                                    label={course.level}
                                    color="info"
                                    component="span"
                                 />
                              </Typography>
                              <Chip
                                 size="small"
                                 label={course.status}
                                 sx={{
                                    fontWeight: 500,
                                    textTransform: "capitalize",
                                 }}
                                 color={
                                    course.status === COURSE_STATUS.ongoing
                                       ? "success"
                                       : course.status === COURSE_STATUS.close
                                       ? "error"
                                       : "default"
                                 }
                              />
                           </Stack>
                        </Stack>
                        <Stack
                           direction="row"
                           alignItems="center"
                           justifyContent="space-between"
                        >
                           <Typography
                              variant="h6"
                              component="h3"
                              fontWeight={700}
                              sx={{ textTransform: "capitalize" }}
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
                           <Button
                              size="small"
                              sx={{
                                 fontWeight: 600,
                                 textTransform: "capitalize",
                              }}
                              onClick={handleByNowClick}
                           >
                              Buy Now
                           </Button>
                        </Stack>
                     </Box>
                  </Box>
               ))}
            </Box>
         ) : (
            <Typography>No have any Course</Typography>
         )}
      </>
   );
};

export default ViewAllCourses;
