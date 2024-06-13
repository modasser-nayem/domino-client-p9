import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FormWrapper from "../../components/form/FormWrapper";
import { FieldValues, SubmitHandler } from "react-hook-form";
import InputItem from "../../components/form/InputItem";
import { Link } from "react-router-dom";
import authSchemaValidation from "../../validation/auth.validation";

const SignUp = () => {
   const onSubmit: SubmitHandler<FieldValues> = (formValues) => {
      console.log(formValues);
   };

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
               Sign Up
            </Typography>
            <FormWrapper
               onSubmit={onSubmit}
               validationSchema={authSchemaValidation.signUp}
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
                        label="Full Name"
                        name="name"
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
                        label="Email"
                        name="email"
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
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                     />
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     sm={6}
                  >
                     <InputItem
                        label="Confirm Password"
                        name="confirmPassword"
                        type="text"
                        placeholder="Retype password"
                     />
                  </Grid>
               </Grid>
               <Button
                  type="submit"
                  size="large"
                  fullWidth
                  sx={{
                     mt: 4,
                  }}
               >
                  Sign Up
               </Button>
               <Typography
                  fontWeight={500}
                  color="primary.main"
                  textAlign="center"
                  mt={3}
               >
                  Have an account?{" "}
                  <Link
                     to="/sign-in"
                     style={{ fontWeight: 600 }}
                  >
                     Sign In
                  </Link>
               </Typography>
            </FormWrapper>
         </Box>
      </Container>
   );
};

export default SignUp;
