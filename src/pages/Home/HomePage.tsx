import { Container } from "@mui/material";
import Banner from "../../components/UI/Home/Banner";
import CourseCategories from "../../components/UI/Home/CourseCategories";
import PopularCourses from "../../components/UI/Home/PopularCourses";
import OurNewCourses from "../../components/UI/Home/OurNewCourses";
import StudentTestimonial from "../../components/UI/Home/StudentTestimonial";
import CourseStatistics from "../../components/UI/Home/CourseStatistics";

const HomePage = () => {
   return (
      <Container>
         <Banner />
         <CourseCategories />
         <PopularCourses />
         <OurNewCourses />
         <CourseStatistics />
         <StudentTestimonial />
      </Container>
   );
};

export default HomePage;
