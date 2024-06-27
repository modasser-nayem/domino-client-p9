import Box from "@mui/material/Box";
import { toast } from "sonner";
import { isRtqQueryError } from "../../../redux/api/baseApi";
import { useDeleteCourseMutation } from "../../../redux/api/courseApi";
import { useEffect } from "react";
import { Button, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";
import DeleteIcon from "@mui/icons-material/Delete";

type DeleteCourseProps = {
   //    children?: ReactNode;
   courseId: string;
   sx?: SxProps<Theme>;
};

const DeleteCourse = ({ courseId, sx }: DeleteCourseProps) => {
   const [deleteCourse, { data, error, isLoading }] = useDeleteCourseMutation();

   const handleDeleteCourse = () => {
      try {
         deleteCourse({ id: courseId });
      } catch (error) {
         toast.error("Something went wrong! try again");
      }
   };

   useEffect(() => {
      if (data) {
         toast.success(data.message);
      }

      if (isRtqQueryError(error)) {
         toast.error(error.data.message);
      }
   }, [data, error]);

   return (
      <Box sx={{ ...sx }}>
         <Button
            disabled={isLoading}
            onClick={handleDeleteCourse}
            variant="text"
         >
            <DeleteIcon sx={{ p: 0 }} />
         </Button>
      </Box>
   );
};

export default DeleteCourse;
