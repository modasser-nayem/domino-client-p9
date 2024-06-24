import { Button } from "@mui/material";
import FormDialog from "../../form/FormDialog";
import categoriesSchemaValidation from "../../../validation/category.validation";
import InputItem from "../../form/InputItem";
import EditIcon from "@mui/icons-material/Edit";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { useUpdateCategoryMutation } from "../../../redux/api/categoriesApi";
import { toast } from "sonner";
import { isRtqQueryError } from "../../../redux/api/baseApi";

type TUpdateCategoryProps = {
   category: { _id: string; name: string; image?: string };
};

const UpdateCategory = ({ category }: TUpdateCategoryProps) => {
   const [updateCategory, { data, error, isLoading }] =
      useUpdateCategoryMutation();

   const handleOnSubmit: SubmitHandler<FieldValues> = (formData) => {
      try {
         const modifyData = {
            name: formData.name,
            image: formData.image,
         };

         updateCategory({ data: modifyData, id: category._id });
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
      <FormDialog
         titleText="Update Category"
         openTitle={
            <Button
               size="small"
               color="warning"
               sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
               }}
            >
               <EditIcon fontSize="small" /> Edit
            </Button>
         }
         submitBtnText="Save Change"
         onSubmit={handleOnSubmit}
         defaultValues={category}
         submitBtnLoading={isLoading}
         successSubmit={data?.success}
         validationSchema={categoriesSchemaValidation.updateCategory}
      >
         <InputItem
            label="Name"
            type="text"
            name="name"
            placeholder="Enter category name"
            sx={{ mb: 2 }}
         />
         <InputItem
            label="Image URL"
            type="text"
            name="image"
            placeholder="Enter category image url"
         />
      </FormDialog>
   );
};

export default UpdateCategory;
