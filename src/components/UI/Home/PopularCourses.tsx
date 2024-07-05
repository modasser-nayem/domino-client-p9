import { Box } from "@mui/material";
import ViewAllCourses from "../ViewAllCourses";
import SectionTitle from "../../shared/SectionTitle";

const PopularCourses = () => {
   return (
      <Box
         pt={3}
         pb={6}
      >
         <SectionTitle title="Popular Courses" />
         <ViewAllCourses />
      </Box>
   );
};

export default PopularCourses;
