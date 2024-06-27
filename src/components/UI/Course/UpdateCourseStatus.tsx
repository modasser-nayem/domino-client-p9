import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { COURSE_STATUS } from "../../../constant/course";
import { TInputSelectOption } from "../../../types/global";
import { useEffect, useState } from "react";
import { TCourseStatus } from "../../../types/course";
import { toast } from "sonner";
import { isRtqQueryError } from "../../../redux/api/baseApi";
import { useUpdateCourseStatusMutation } from "../../../redux/api/courseApi";
import { Button, CircularProgress } from "@mui/material";

const UpdateCourseStatus = ({
   courseId,
   currentStatus,
}: {
   courseId: string;
   currentStatus: TCourseStatus;
}) => {
   const statusOptions: TInputSelectOption[] | undefined = Object.keys(
      COURSE_STATUS
   ).map((item) => ({
      label: item,
      value: item,
   }));
   const [status, setStatus] = useState(currentStatus);

   const handleChange = (event: SelectChangeEvent) => {
      setStatus(event.target.value as TCourseStatus);
   };

   const [updateCourseStatus, { data, error, isLoading }] =
      useUpdateCourseStatusMutation();

   const handleUpdateStatus = (status: TCourseStatus) => {
      try {
         updateCourseStatus({ status: status, courseId: courseId });
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
      <Box sx={{ minWidth: 200, maxWidth: 400, display: "flex" }}>
         <FormControl
            fullWidth
            sx={{
               borderTopRightRadius: 0,
               borderBottomRightRadius: 0,
               flex: 1,
            }}
         >
            <InputLabel id="demo-simple-select-label">Update Status</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={status}
               label="status"
               onChange={handleChange}
               sx={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  textTransform: "capitalize",
               }}
            >
               {statusOptions.map((item, i) => (
                  <MenuItem
                     key={i}
                     value={item.value}
                     sx={{ textTransform: "capitalize" }}
                  >
                     {item.label}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
         <Button
            onClick={() => handleUpdateStatus(status)}
            endIcon={
               isLoading ? (
                  <CircularProgress
                     size={25}
                     color="warning"
                  />
               ) : undefined
            }
            disabled={isLoading}
            sx={{
               borderTopLeftRadius: 0,
               borderBottomLeftRadius: 0,
            }}
         >
            Save Change
         </Button>
      </Box>
   );
};

export default UpdateCourseStatus;
