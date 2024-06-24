import { Box, Button, Stack, Typography } from "@mui/material";
import { toast } from "sonner";
import { isRtqQueryError } from "../../../redux/api/baseApi";
import CustomTable from "../../../components/shared/CustomTable/CustomTable";
import {
   useDeleteCategoryMutation,
   useGetAllCategoryQuery,
} from "../../../redux/api/categoriesApi";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCategory from "../../../components/UI/Categories/AddCategory";
import { useEffect } from "react";
import UpdateCategory from "../../../components/UI/Categories/UpdateCategory";
import Loading from "../../../components/shared/Loading/Loading";

const Categories = () => {
   const { data } = useGetAllCategoryQuery(undefined);
   const [
      deleteCategory,
      {
         data: deleteCategoryData,
         error: deleteCategoryError,
         isLoading: deleteCategoryIsLoading,
      },
   ] = useDeleteCategoryMutation();

   const handleDeleteCategory = (categoryId: string) => {
      try {
         deleteCategory({ id: categoryId });
      } catch (error) {
         toast.error("Something went wrong! try again");
      }
   };

   useEffect(() => {
      if (deleteCategoryData) {
         toast.success(deleteCategoryData.message);
      }
      if (isRtqQueryError(deleteCategoryError)) {
         toast.error(deleteCategoryError.data.message);
      }
   }, [deleteCategoryData, deleteCategoryError]);

   const columns = [
      { id: "id", label: "ID" },
      { id: "name", label: "Name" },
      { id: "icon", label: "Icon" },
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
      createdAt: (
         <Typography>{moment(item.createdAt).format("DD-MM-YYYY")}</Typography>
      ),
      action: (
         <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
         >
            <UpdateCategory category={item} />
            <Button
               color="error"
               size="small"
               disabled={deleteCategoryIsLoading}
               onClick={() => handleDeleteCategory(item._id)}
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
      <Box
         maxWidth={900}
         mx="auto"
      >
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
               Category
            </Typography>
            <AddCategory />
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
export default Categories;
