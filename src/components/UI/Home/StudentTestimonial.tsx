import { Box, Typography } from "@mui/material";
import SectionTitle from "../../shared/SectionTitle";
import { dummyTestimonials } from "../../../constant/dummyTestimonial";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";

const StudentTestimonial = () => {
   return (
      <Box
         mt={15}
         mb={20}
         px={{
            md: 10,
         }}
      >
         <SectionTitle title="Student Testimonial" />
         <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
               superLargeDesktop: {
                  breakpoint: { max: 4000, min: 1800 },
                  items: 5,
               },
               desktop: {
                  breakpoint: {
                     max: 1800,
                     min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
               },
               tablet: {
                  breakpoint: {
                     max: 1024,
                     min: 678,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
               },
               mobile: {
                  breakpoint: {
                     max: 678,
                     min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
               },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
         >
            {dummyTestimonials.map((testimonial) => (
               <Box
                  key={testimonial._id}
                  sx={{
                     p: 4,
                     display: "flex",
                     flexDirection: "column",
                     textAlign: "center",
                     gap: 3,
                     height: 400,
                     boxShadow: 15,
                  }}
               >
                  {testimonial.student?.profileImg ? (
                     <Box
                        src={testimonial.student.profileImg}
                        alt={testimonial.student.name}
                        component="img"
                        sx={{
                           width: 98,
                           height: 98,
                           borderRadius: "50%",
                           border: "4px solid",
                           borderColor: "primary.main",
                           mx: "auto",
                        }}
                     />
                  ) : (
                     <Box
                        bgcolor="primary.main"
                        component="div"
                        sx={{
                           width: 100,
                           height: 100,
                           borderRadius: "50%",
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                           fontSize: "2rem",
                           color: "wheat",
                           mx: "auto",
                        }}
                     >
                        {testimonial.student.name.slice(0, 1)}
                     </Box>
                  )}
                  <Link to={``}>
                     <Typography
                        sx={{
                           color: "primary.main",
                           fontSize: 20,
                           fontWeight: 600,
                        }}
                     >
                        {testimonial.student.name}
                     </Typography>
                  </Link>
                  <Typography>{testimonial.content}</Typography>
                  <Link to={``}>
                     <Typography
                        sx={{
                           color: "warning.main",
                           fontSize: 20,
                           fontWeight: 600,
                        }}
                     >
                        {testimonial.course.title}
                     </Typography>
                  </Link>
               </Box>
            ))}
         </Carousel>
      </Box>
   );
};

export default StudentTestimonial;
