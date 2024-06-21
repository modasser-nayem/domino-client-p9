import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FormWrapper from "../../../components/form/FormWrapper";
import { FieldValues, SubmitHandler } from "react-hook-form";
import InputItem from "../../../components/form/InputItem";
import { Link, useNavigate } from "react-router-dom";
import authSchemaValidation from "../../../validation/auth.validation";
import { useEffect } from "react";
import { useResetPasswordMutation } from "../../../redux/api/authApi";
import { toast } from "sonner";
import { isRtqQueryError } from "../../../redux/api/baseApi";
import { useQuery } from "../../../hooks/useQuery";

const ResetPassword = () => {
   const navigate = useNavigate();
   const query = useQuery();
   const token = query.get("token");

   const [resetPassword, { data, error, isLoading }] =
      useResetPasswordMutation();

   const onSubmit: SubmitHandler<FieldValues> = (formData) => {
      try {
         const modifyData = {
            newPassword: formData.newPassword,
            confirmPassword: formData.confirmPassword,
         };

         if (!token) {
            toast.error("Something went wrong! go to email");
         } else {
            resetPassword({ data: modifyData, token: token });
         }
      } catch (error) {
         toast.error("Something went wrong! try again");
      }
   };

   useEffect(() => {
      console.log({ data, error });

      if (data) {
         toast.success(data.message);
         navigate("/sign-in");
      }

      if (isRtqQueryError(error)) {
         toast.error(error.data.message);
      }
   }, [data, error, navigate]);

   return (
      <Container
         sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <Box
            my={10}
            p={5}
            boxShadow={15}
            sx={{
               maxWidth: 600,
            }}
         >
            <Typography
               variant="h5"
               fontWeight={700}
               component="h1"
               align="center"
               mb={3}
            >
               Reset Password
            </Typography>
            <FormWrapper
               onSubmit={onSubmit}
               validationSchema={authSchemaValidation.resetPassword}
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
               <Button
                  sx={{ mt: 4 }}
                  disabled={isLoading}
                  type="submit"
                  size="large"
                  fullWidth
               >
                  Save Change
               </Button>
               <Typography
                  fontWeight={500}
                  color="primary.main"
                  textAlign="center"
                  mt={3}
               >
                  Back to{" "}
                  <Link
                     to="/"
                     style={{ fontWeight: 600 }}
                  >
                     Home
                  </Link>
               </Typography>
            </FormWrapper>
         </Box>
      </Container>
   );
};

export default ResetPassword;
