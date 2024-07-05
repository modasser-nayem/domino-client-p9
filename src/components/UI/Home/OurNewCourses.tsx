import { Box } from "@mui/material";
import ViewAllCourses from "../ViewAllCourses";
import SectionTitle from "../../shared/SectionTitle";

const OurNewCourses = () => {
   return (
      <Box py={10}>
         <SectionTitle title="Our New Courses" />
         <ViewAllCourses />
      </Box>
   );
};

export default OurNewCourses;
