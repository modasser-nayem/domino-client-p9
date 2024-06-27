import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { TGetSingleCourse } from "../../../types/course";
import StarIcon from "@mui/icons-material/Star";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const CourseDetailsTabs = ({ course }: { course: TGetSingleCourse }) => {
   const [tabValue, setTabValue] = React.useState(1);

   const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
      setTabValue(newValue);
   };

   const details = [
      {
         label: "Features",
         value: course.features.length
            ? course.features
            : [
                 "HTML5, CSS3",
                 "Building A Professional Website",
                 "Git, GitHub, Hosting, Bootstrap 5, JavaScript, ES6, Interactive Website, API JSON, Server, Data Load",
                 "Dynamic Website",
                 "Building a Website Using API, ReactJS, React Authentication (Firebase), NodeJS, MongoDB",
                 "Full Stack Website (E-commerce).",
              ],
      },
      { label: "Enrolled", value: 58 }, // course.enrolled
      { label: "Lectures", value: 35 }, // course.lectures
      { label: "Video", value: "27:31:46" }, // course.video
      { label: "Level", value: course.level },
      { label: "Ratings", value: `${4.3} ${47}` }, // course.rating || course.ratingCount
      { label: "Languages", value: course.language },
   ];

   return (
      <Box sx={{ width: "100%" }}>
         <Box sx={{ borderBottom: 2, borderTop: 2, borderColor: "divider" }}>
            <Tabs
               value={tabValue}
               onChange={handleChange}
               aria-label="basic tabs example"
            >
               <Tab
                  label="Overview"
                  value={1}
               />
               <Tab
                  label="Reviews"
                  value={2}
               />
               <Tab
                  label="Instructor"
                  value={3}
               />
            </Tabs>
         </Box>
         <Box my={4}>
            {tabValue === 1 ? (
               <Box>
                  <Typography
                     variant="h6"
                     component="h3"
                     fontWeight={600}
                  >
                     {course.title}
                  </Typography>
                  <Typography
                     color="gray"
                     variant="body1"
                  >
                     {course.description} Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Dignissimos, fuga unde quas aspernatur
                     neque vero quod inventore voluptatem rerum quam dolores
                     similique quo reprehenderit, maxime nihil odio beatae
                     doloremque animi. Lorem ipsum, dolor sit amet consectetur
                     adipisicing elit. Facilis aperiam, omnis nesciunt quibusdam
                     nobis quas! Illum magnam dignissimos assumenda sint?
                  </Typography>
                  {/* details table */}
                  <Box sx={{ mt: 4 }}>
                     {details.map((detail, index) => (
                        <Grid
                           container
                           key={index}
                           sx={{
                              p: 2,
                              borderTop: index === 0 ? 2 : 0,
                              borderBottom: 2,
                              borderColor: "divider",
                           }}
                           flexWrap={{
                              xs: "wrap",
                              md: "nowrap",
                           }}
                           gap={2}
                        >
                           <Grid
                              item
                              xs={3}
                           >
                              <Typography
                                 variant="subtitle1"
                                 sx={{ fontWeight: "bold", color: "gray" }}
                              >
                                 {detail.label}:
                              </Typography>
                           </Grid>
                           <Grid
                              item
                              xs={9}
                           >
                              {detail.label === "Ratings" ? (
                                 <Box
                                    sx={{
                                       display: "flex",
                                       alignItems: "center",
                                    }}
                                 >
                                    <Box
                                       sx={{
                                          display: "flex",
                                          color: "#fbc02d",
                                          marginRight: 1,
                                       }}
                                    >
                                       {[...Array(Math.round(4.3))].map(
                                          (_, i) => (
                                             <StarIcon key={i} />
                                          )
                                       )}
                                    </Box>
                                    <Typography
                                       color="gray"
                                       variant="body1"
                                    >
                                       {detail.value}
                                    </Typography>
                                 </Box>
                              ) : detail.label === "Features" ? (
                                 <Box>
                                    {typeof detail.value === "object" &&
                                       detail.value.map((item, i) => (
                                          <Typography
                                             fontSize={14}
                                             color="gray"
                                             key={i}
                                             mb={0.5}
                                          >
                                             <TaskAltIcon
                                                sx={{
                                                   fontSize: 16,
                                                   color: "green",
                                                   mr: 0.5,
                                                }}
                                             />{" "}
                                             {item},
                                          </Typography>
                                       ))}
                                 </Box>
                              ) : (
                                 <Typography
                                    textTransform="capitalize"
                                    color="gray"
                                    variant="body1"
                                 >
                                    {detail.value}
                                 </Typography>
                              )}
                           </Grid>
                        </Grid>
                     ))}
                  </Box>
               </Box>
            ) : tabValue === 2 ? (
               <Box>
                  <Box
                     mt={15}
                     key={course._id}
                     component="div"
                     width={300}
                     boxShadow={15}
                  >
                     <Box
                        component="img"
                        src={course.thumbnail_url}
                        alt={course.title}
                        width="100%"
                        height="100%"
                        maxHeight={220}
                     />

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
                           <Typography fontWeight={600}>
                              Level:{" "}
                              <Chip
                                 size="small"
                                 label={course.level}
                                 color="info"
                                 component="span"
                              />
                           </Typography>
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
                           >
                              {course.price}TK
                           </Typography>
                           <Button size="small">Buy Now</Button>
                        </Stack>
                     </Box>
                  </Box>
               </Box>
            ) : (
               <Box>Instructor</Box>
            )}
         </Box>
      </Box>
   );
};

export default CourseDetailsTabs;
