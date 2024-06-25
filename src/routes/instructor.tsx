import AddCourse from "../pages/CourseManagement/Course/AddCourse";
import UpdateCourse from "../pages/CourseManagement/Course/UpdateCourse";
import CoursesForInstructor from "../pages/Instructor/CoursesForInstructor";
import MyCoursesForInstructor from "../pages/Instructor/MyCoursesForInstructor";
import { TRouteItem } from "../types/route";

export const instructorRoutes: TRouteItem[] = [
   {
      name: "Dashboard",
      index: true,
      element: <h1>Instructor Dashboard</h1>,
   },
   {
      name: "Course Management",
      children: [
         {
            name: "Courses",
            path: "courses",
            element: <CoursesForInstructor />,
         },
         {
            name: "My Courses",
            path: "my-courses",
            element: <MyCoursesForInstructor />,
         },
         {
            name: "Add Course",
            path: "add-course",
            element: <AddCourse />,
         },
         {
            name: "Update Course",
            path: "update-course/:id",
            element: <UpdateCourse />,
         },
      ],
   },
];
