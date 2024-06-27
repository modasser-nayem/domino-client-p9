import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import FormWrapper from "../../../components/form/FormWrapper";
import { FieldValues, SubmitHandler } from "react-hook-form";
import InputItem from "../../../components/form/InputItem";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { isRtqQueryError } from "../../../redux/api/baseApi";
import courseSchemaValidation from "../../../validation/course.validation";
import {
   useGetSingleCourseQuery,
   useUpdateCourseMutation,
} from "../../../redux/api/courseApi";
import { useGetAllSubcategoryQuery } from "../../../redux/api/categoriesApi";
import { TInputSelectOption } from "../../../types/global";
import InputSelect from "../../../components/form/InputSelect";
import { COURSE_LEVEL, COURSE_PRICE_TYPE } from "../../../constant/course";
import { LANGUAGE_NAME_ARRAY } from "../../../constant/global";
import InputMultipleSelect from "../../../components/form/InputMultipleSelect";
import Loading from "../../../components/shared/Loading/Loading";
import UpdateCourseStatus from "../../../components/UI/Course/UpdateCourseStatus";

const AddCourse = () => {
   const params = useParams();
   const courseId = params.id as string;
   const navigate = useNavigate();

   const { data: courseData } = useGetSingleCourseQuery({ id: courseId });
   const foundCourseData = courseData?.data;

   const defaultFormValues = foundCourseData && {
      title: foundCourseData.title,
      thumbnail_url: foundCourseData.thumbnail_url,
      subcategory: foundCourseData.subcategory,
      level: foundCourseData.level,
      price: foundCourseData.price,
      priceType: foundCourseData.priceType,
      description: foundCourseData.description,
      features: foundCourseData.features,
      language: foundCourseData.language,
      tags: foundCourseData.tags,
      status: foundCourseData.status,
   };

   const { data: subcategories } = useGetAllSubcategoryQuery(undefined);

   const subcategoryOptions: TInputSelectOption[] | undefined =
      subcategories?.data?.map((item) => ({
         label: item.name,
         value: item._id,
      }));

   const levelOptions: TInputSelectOption[] | undefined = Object.keys(
      COURSE_LEVEL
   ).map((item) => ({
      label: item,
      value: item,
   }));

   const priceTypeOptions: TInputSelectOption[] | undefined = Object.keys(
      COURSE_PRICE_TYPE
   ).map((item) => ({
      label: item,
      value: item,
   }));

   const languageOptions: TInputSelectOption[] | undefined =
      LANGUAGE_NAME_ARRAY.map((item) => ({
         label: item,
         value: item,
      }));

   const [
      updateCourse,
      {
         data: updateCourseData,
         error: updateCourseError,
         isLoading: updateCourseIsLoading,
      },
   ] = useUpdateCourseMutation();

   const onSubmit: SubmitHandler<FieldValues> = (formData) => {
      try {
         const modifyData = {
            title: formData.title,
            thumbnail_url: formData.thumbnail_url,
            subcategory: formData.subcategory,
            level: formData.level,
            price: Number(formData.price),
            priceType: formData.priceType,
            description: formData.description,
            features: formData.features,
            language: formData.language,
            tags: formData.tags,
         };

         updateCourse({ data: modifyData, id: courseId });
      } catch (error) {
         toast.error("Something went wrong! try again");
      }
   };

   useEffect(() => {
      if (updateCourseData) {
         toast.success(updateCourseData.message);
      }

      if (isRtqQueryError(updateCourseError)) {
         toast.error(updateCourseError.data.message);
      }
   }, [updateCourseData, updateCourseError, navigate]);

   return (
      <Box
         sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         {defaultFormValues ? (
            <Box
               my={3}
               p={5}
               sx={{
                  maxWidth: 600,
               }}
            >
               <Stack
                  direction="row"
                  justifyContent="center"
                  mb={5}
               >
                  <UpdateCourseStatus
                     courseId={courseId}
                     currentStatus={defaultFormValues.status}
                  />
               </Stack>
               <Typography
                  variant="h5"
                  fontWeight={700}
                  component="h1"
                  align="center"
                  mb={3}
               >
                  Update Course
               </Typography>
               <FormWrapper
                  onSubmit={onSubmit}
                  validationSchema={courseSchemaValidation.updateCourse}
                  successSubmit={updateCourseData?.success}
                  defaultValues={defaultFormValues && defaultFormValues}
               >
                  <Grid
                     container
                     spacing={3}
                  >
                     <Grid
                        item
                        xs={12}
                     >
                        <InputItem
                           label="Title"
                           name="title"
                           type="text"
                           placeholder="Enter course title"
                        />
                     </Grid>
                     <Grid
                        item
                        xs={12}
                        sm={6}
                     >
                        <InputItem
                           label="Thumbnail URL"
                           name="thumbnail_url"
                           type="text"
                           placeholder="Enter thumbnail url"
                        />
                     </Grid>
                     <Grid
                        item
                        xs={12}
                        sm={6}
                     >
                        <InputSelect
                           label="Select Subcategory"
                           name="subcategory"
                           options={
                              subcategoryOptions ? subcategoryOptions : []
                           }
                        />
                     </Grid>

                     <Grid
                        item
                        xs={12}
                        sm={6}
                     >
                        <InputSelect
                           label="Course Level"
                           name="level"
                           options={levelOptions ? levelOptions : []}
                        />
                     </Grid>
                     <Grid
                        item
                        xs={12}
                        sm={6}
                     >
                        <InputItem
                           label="Price"
                           name="price"
                           type="number"
                           placeholder="Enter price"
                        />
                     </Grid>
                     <Grid
                        item
                        xs={12}
                        sm={6}
                     >
                        <InputSelect
                           label="Price Type"
                           name="priceType"
                           options={priceTypeOptions ? priceTypeOptions : []}
                        />
                     </Grid>
                     <Grid
                        item
                        xs={12}
                        sm={6}
                     >
                        <InputSelect
                           label="Language"
                           name="language"
                           options={languageOptions ? languageOptions : []}
                        />
                     </Grid>
                     <Grid
                        item
                        xs={12}
                     >
                        <InputItem
                           label="Description"
                           name="description"
                           type="text"
                           placeholder="Write Description"
                        />
                     </Grid>
                     <Grid
                        item
                        xs={12}
                     >
                        <InputMultipleSelect
                           label="Features"
                           name="features"
                           placeholder="Enter features"
                        />
                     </Grid>
                     <Grid
                        item
                        xs={12}
                     >
                        <InputMultipleSelect
                           label="Tags"
                           name="tags"
                           placeholder="Enter related tags"
                        />
                     </Grid>
                  </Grid>
                  <Button
                     disabled={updateCourseIsLoading}
                     type="submit"
                     size="large"
                     fullWidth
                     sx={{
                        mt: 4,
                     }}
                  >
                     Update Course
                  </Button>
               </FormWrapper>
            </Box>
         ) : (
            <Loading />
         )}
      </Box>
   );
};

export default AddCourse;
