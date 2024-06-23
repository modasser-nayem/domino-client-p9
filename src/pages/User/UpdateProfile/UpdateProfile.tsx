import { Link, useNavigate } from "react-router-dom";
import { useUpdateMyProfileMutation } from "../../../redux/api/userApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useEffect } from "react";
import { isRtqQueryError } from "../../../redux/api/baseApi";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FormWrapper from "../../../components/form/FormWrapper";
import InputItem from "../../../components/form/InputItem";
import authSchemaValidation from "../../../validation/auth.validation";
import InputSelect from "../../../components/form/InputSelect";
import {
   BLOOD_GROUP_ARRAY,
   LANGUAGE_NAME_ARRAY,
} from "../../../constant/global";
import InputDatePicker from "../../../components/form/InputDatePicker";

const UpdateProfile = () => {
   const navigate = useNavigate();

   const [updateMyProfile, { data, error, isLoading }] =
      useUpdateMyProfileMutation();

   const onSubmit: SubmitHandler<FieldValues> = (formData) => {
      try {
         updateMyProfile(formData);
      } catch (error) {
         toast.error("Something went wrong! try again");
      }
   };

   useEffect(() => {
      console.log({ data, error });
      if (data) {
         toast.success(data.message);
         navigate("/profile");
      }

      if (error && isRtqQueryError(error)) {
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
               Update Profile
            </Typography>
            <FormWrapper
               onSubmit={onSubmit}
               validationSchema={authSchemaValidation.updateMyProfile}
               successSubmit={data?.success}
            >
               <Grid
                  container
                  spacing={3}
               >
                  <Grid
                     item
                     xs={12}
                     sm={6}
                  >
                     <InputItem
                        label="Full Name"
                        name="user.name"
                        type="text"
                        placeholder="Enter your full name"
                     />
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     sm={6}
                  >
                     <InputItem
                        label="Profile URL"
                        name="user.profileImg"
                        type="text"
                        placeholder="Enter profile image URL"
                     />
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     sm={6}
                  >
                     <InputItem
                        label="Email"
                        name="user.email"
                        type="text"
                        placeholder="Enter your email"
                     />
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     sm={6}
                  >
                     <InputItem
                        label="Contact No"
                        name="contactNo"
                        type="number"
                        placeholder="Enter your contact no."
                     />
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     sm={6}
                  >
                     <InputItem
                        label="Designation"
                        name="designation"
                        type="text"
                        placeholder="What is your designation"
                     />
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     sm={6}
                  >
                     <InputItem
                        label="About"
                        name="about"
                        type="text"
                        placeholder="Write about you"
                     />
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     sm={6}
                  >
                     <InputDatePicker
                        label="Date Of Birth"
                        name="dateOfBirth"
                     />
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     sm={6}
                  >
                     <InputSelect
                        label="Gender"
                        name="gender"
                        options={[
                           { label: "Male", value: "male" },
                           { label: "Female", value: "female" },
                        ]}
                     />
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     sm={6}
                  >
                     <InputSelect
                        label="Blood Group"
                        name="bloodGroup"
                        options={BLOOD_GROUP_ARRAY.map((item) => ({
                           label: item,
                           value: item,
                        }))}
                     />
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     sm={6}
                  >
                     <InputSelect
                        label="Language"
                        name="languagees"
                        options={LANGUAGE_NAME_ARRAY.map((item) => ({
                           label: item,
                           value: item,
                        }))}
                     />
                  </Grid>
               </Grid>
               <Button
                  disabled={isLoading}
                  type="submit"
                  size="large"
                  fullWidth
                  sx={{
                     mt: 4,
                  }}
               >
                  Save Change
               </Button>
               <Typography
                  fontWeight={500}
                  color="primary.main"
                  textAlign="center"
                  mt={3}
               >
                  Go to{" "}
                  <Link
                     to="/profile"
                     style={{ fontWeight: 600 }}
                  >
                     Back
                  </Link>
               </Typography>
            </FormWrapper>
         </Box>
      </Container>
   );
};
export default UpdateProfile;
