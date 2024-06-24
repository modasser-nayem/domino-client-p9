import { Button } from "@mui/material";
import FormDialog from "../../form/FormDialog";
import categoriesSchemaValidation from "../../../validation/category.validation";
import InputItem from "../../form/InputItem";
import AddIcon from "@mui/icons-material/Add";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import {
   useAddSubcategoryMutation,
   useGetAllCategoryQuery,
} from "../../../redux/api/categoriesApi";
import { toast } from "sonner";
import { isRtqQueryError } from "../../../redux/api/baseApi";
import { TInputSelectOption } from "../../../types/global";
import InputSelect from "../../form/InputSelect";

const AddSubcategory = () => {
   const { data: categories } = useGetAllCategoryQuery(undefined);

   const categoryInputOptions: TInputSelectOption[] | undefined =
      categories?.data?.map((item) => ({
         label: item.name,
         value: item._id,
      }));

   const [addNewSubcategory, { data, error, isLoading }] =
      useAddSubcategoryMutation();

   const handleOnSubmit: SubmitHandler<FieldValues> = (formData) => {
      try {
         const modifyData = {
            category: formData.category,
            name: formData.name,
            image: formData.image,
         };

         addNewSubcategory(modifyData);
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
         titleText="Add New Subcategory"
         openTitle={
            <Button>
               <AddIcon /> Add New
            </Button>
         }
         submitBtnText="Add Subcategory"
         onSubmit={handleOnSubmit}
         submitBtnLoading={isLoading}
         successSubmit={data?.success}
         validationSchema={categoriesSchemaValidation.addSubcategory}
      >
         <InputSelect
            label="Select Category"
            name="category"
            options={categoryInputOptions ? categoryInputOptions : []}
         />
         <InputItem
            label="Name"
            type="text"
            name="name"
            placeholder="Enter category name"
            sx={{ my: 2 }}
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

export default AddSubcategory;
