import { Grid } from "@mui/material";
import { FieldValues, SubmitHandler } from "react-hook-form";
import InputItem from "../../../components/form/InputItem";
import authSchemaValidation from "../../../validation/auth.validation";
import { useEffect } from "react";
import { useChangePasswordMutation } from "../../../redux/api/authApi";
import { toast } from "sonner";
import { isRtqQueryError } from "../../../redux/api/baseApi";
import FormDialog from "../../../components/form/FormDialog";

const ChangePassword = () => {
   const [changePassword, { data, error, isLoading }] =
      useChangePasswordMutation();

   const onSubmit: SubmitHandler<FieldValues> = (formData) => {
      try {
         const modifyData = {
            currentPassword: formData.currentPassword,
            newPassword: formData.newPassword,
            confirmPassword: formData.confirmPassword,
         };

         changePassword(modifyData);
      } catch (error) {
         toast.error("Something went wrong! try again");
      }
   };

   useEffect(() => {
      console.log({ data, error });

      if (data) {
         toast.success(data.message);
      }

      if (isRtqQueryError(error)) {
         toast.error(error.data.message);
      }
   }, [data, error]);

   return (
      <FormDialog
         openTitle="Change Password"
         titleText="Change Password"
         submitBtnText="Save Change"
         submitBtnLoading={isLoading}
         validationSchema={authSchemaValidation.changePassword}
         onSubmit={onSubmit}
         successSubmit={data?.success}
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
                  label="Current Password"
                  name="currentPassword"
                  type="password"
                  placeholder="Enter Current Password"
               />
            </Grid>
            <Grid
               item
               xs={12}
            >
               <InputItem
                  label="New Password"
                  name="newPassword"
                  type="password"
                  placeholder="Enter New Password"
               />
            </Grid>
            <Grid
               item
               xs={12}
            >
               <InputItem
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Enter Confirm Password"
               />
            </Grid>
         </Grid>
      </FormDialog>
   );
};

export default ChangePassword;
