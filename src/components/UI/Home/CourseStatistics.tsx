import { Box, Stack, Typography } from "@mui/material";

const CourseStatistics = () => {
   const statistics = [
      {
         name: "Students",
         value: 4590,
      },
      {
         name: "Instructors",
         value: 345,
      },
      {
         name: "Enrollments",
         value: 34789,
      },
      {
         name: "Courses",
         value: 1347,
      },
   ];

   return (
      <Box py={15}>
         <Stack
            maxWidth={1100}
            mx="auto"
         >
            <Stack
               position="relative"
               direction="row"
               alignItems="center"
               flexWrap={{
                  xs: "wrap",
                  sm: "nowrap",
               }}
               justifyContent="space-between"
               gap={{
                  lg: 10,
                  xs: 6,
               }}
            >
               <Box
                  sx={{
                     bgcolor: "primary.main",
                     position: "absolute",
                     py: {
                        xs: 0,
                        sm: 3,
                        md: 5,
                     },
                     textAlign: "center",
                     width: "100%",
                     zIndex: -1,
                  }}
               ></Box>
               {statistics.map((item, i) => (
                  <Box
                     key={i}
                     sx={{
                        bgcolor: "warning.main",
                        color: "white",
                        width: {
                           xs: 150,
                           md: 200,
                        },
                        height: {
                           xs: 100,
                           md: 150,
                        },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: 20,
                     }}
                  >
                     <Typography
                        sx={{ fontSize: { xs: 16, md: 20 }, fontWeight: 500 }}
                     >
                        {item.name}
                     </Typography>
                     <Typography
                        sx={{ fontSize: { xs: 24, md: 34 }, fontWeight: 900 }}
                     >
                        {item.value}+
                     </Typography>
                  </Box>
               ))}
            </Stack>
         </Stack>
      </Box>
   );
};

export default CourseStatistics;
