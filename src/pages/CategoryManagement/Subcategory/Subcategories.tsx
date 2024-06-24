import { Box, Button, Stack, Typography } from "@mui/material";
import { toast } from "sonner";
import { isRtqQueryError } from "../../../redux/api/baseApi";
import CustomTable from "../../../components/shared/CustomTable/CustomTable";
import {
   useDeleteSubcategoryMutation,
   useGetAllSubcategoryQuery,
} from "../../../redux/api/categoriesApi";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import AddSubcategory from "../../../components/UI/Categories/AddSubcategory";
import UpdateSubcategory from "../../../components/UI/Categories/UpdateSubcategory";
import Loading from "../../../components/shared/Loading/Loading";

const Subcategories = () => {
   const { data } = useGetAllSubcategoryQuery(undefined);
   const [
      deleteSubcategory,
      {
         data: deleteSubcategoryData,
         error: deleteSubcategoryError,
         isLoading: deleteSubcategoryIsLoading,
      },
   ] = useDeleteSubcategoryMutation();

   const handleDeleteSubcategory = (subcategoryId: string) => {
      try {
         deleteSubcategory({ id: subcategoryId });
      } catch (error) {
         toast.error("Something went wrong! try again");
      }
   };

   useEffect(() => {
      if (deleteSubcategoryData) {
         toast.success(deleteSubcategoryData.message);
      }
      if (isRtqQueryError(deleteSubcategoryError)) {
         toast.error(deleteSubcategoryError.data.message);
      }
   }, [deleteSubcategoryData, deleteSubcategoryError]);

   const columns = [
      { id: "id", label: "ID" },
      { id: "name", label: "Name" },
      { id: "icon", label: "Icon" },
      { id: "parent", label: "Parent" },
      { id: "createdAt", label: "Created Date" },
      { id: "action", label: "Action" },
   ];

   const tableData = data?.data?.map((item, num) => ({
      id: <Typography fontWeight={600}>{num}</Typography>,
      name: <Typography fontWeight={600}>{item.name}</Typography>,
      icon: (
         <>
            {item.image ? (
               <Box
                  src={item?.image}
                  alt={item.name}
                  component="img"
                  sx={{
                     width: 56,
                     height: 56,
                  }}
               />
            ) : (
               <Box
                  sx={{
                     width: 55,
                     height: 55,
                     border: "1px solid",
                     borderColor: "primary.main",
                     borderRadius: "9%",
                  }}
               ></Box>
            )}
         </>
      ),
      parent: (
         <Stack
            direction="column"
            alignItems="center"
            gap={1}
         >
            <Typography fontWeight={600}>{item.category.name}</Typography>
            {item?.category?.image ? (
               <Box
                  src={item?.category?.image}
                  alt={item.name}
                  component="img"
                  sx={{
                     width: 40,
                     height: 30,
                  }}
               />
            ) : (
               <Box
                  sx={{
                     width: 39,
                     height: 29,
                     border: "1px solid",
                     borderColor: "primary.main",
                     borderRadius: "8%",
                  }}
               ></Box>
            )}
         </Stack>
      ),
      createdAt: (
         <Typography>
            {moment(new Date().toISOString()).format("DD-MM-YYYY")}
         </Typography>
      ),
      action: (
         <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
         >
            <UpdateSubcategory
               subcategory={{
                  _id: item._id,
                  category: item.category._id,
                  name: item.name,
                  image: item.image,
               }}
            />
            <Button
               color="error"
               size="small"
               disabled={deleteSubcategoryIsLoading}
               onClick={() => handleDeleteSubcategory(item._id)}
               sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
               }}
            >
               <DeleteIcon fontSize="small" /> Delete
            </Button>
         </Stack>
      ),
   }));

   return (
      <Box>
         <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
         >
            <Typography
               variant="h5"
               component="h3"
               fontWeight={700}
            >
               Subcategory
            </Typography>
            <AddSubcategory />
         </Stack>
         {tableData ? (
            <CustomTable
               columns={columns}
               data={tableData}
               align="center"
            />
         ) : (
            <Loading />
         )}
      </Box>
   );
};
export default Subcategories;
