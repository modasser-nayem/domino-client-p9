import { Button } from "@mui/material";
import FormDialog from "../../form/FormDialog";
import categoriesSchemaValidation from "../../../validation/category.validation";
import InputItem from "../../form/InputItem";
import EditIcon from "@mui/icons-material/Edit";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import {
   useGetAllCategoryQuery,
   useUpdateSubcategoryMutation,
} from "../../../redux/api/categoriesApi";
import { toast } from "sonner";
import { isRtqQueryError } from "../../../redux/api/baseApi";
import { TInputSelectOption } from "../../../types/global";
import InputSelect from "../../form/InputSelect";

type TUpdateCategoryProps = {
   subcategory: {
      _id: string;
      category: string;
      name: string;
      image?: string;
   };
};

const UpdateSubcategory = ({ subcategory }: TUpdateCategoryProps) => {
   const { data: categories } = useGetAllCategoryQuery(undefined);

   const categoryInputOptions: TInputSelectOption[] | undefined =
      categories?.data?.map((item) => ({
         label: item.name,
         value: item._id,
      }));

   const [updateSubCategory, { data, error, isLoading }] =
      useUpdateSubcategoryMutation();

   const handleOnSubmit: SubmitHandler<FieldValues> = (formData) => {
      try {
         const modifyData = {
            category: formData.category,
            name: formData.name,
            image: formData.image,
         };

         updateSubCategory({ data: modifyData, id: subcategory._id });
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
         defaultValues={subcategory}
         submitBtnLoading={isLoading}
         successSubmit={data?.success}
         validationSchema={categoriesSchemaValidation.updateSubcategory}
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

export default UpdateSubcategory;
