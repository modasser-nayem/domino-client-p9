import { Button } from "@mui/material";
import FormDialog from "../../form/FormDialog";
import categoriesSchemaValidation from "../../../validation/category.validation";
import InputItem from "../../form/InputItem";
import AddIcon from "@mui/icons-material/Add";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { useAddCategoryMutation } from "../../../redux/api/categoriesApi";
import { toast } from "sonner";
import { isRtqQueryError } from "../../../redux/api/baseApi";

const AddCategory = () => {
   const [addNewCategory, { data, error, isLoading }] =
      useAddCategoryMutation();

   const handleOnSubmit: SubmitHandler<FieldValues> = (formData) => {
      try {
         const modifyData = {
            name: formData.name,
            image: formData.image,
         };

         addNewCategory(modifyData);
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
         titleText="Add New Category"
         openTitle={
            <Button>
               <AddIcon /> Add Category
            </Button>
         }
         submitBtnText="Add Category"
         onSubmit={handleOnSubmit}
         submitBtnLoading={isLoading}
         successSubmit={data?.success}
         validationSchema={categoriesSchemaValidation.addCategory}
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

export default AddCategory;
