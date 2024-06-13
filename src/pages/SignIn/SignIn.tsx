import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FormWrapper from "../../components/form/FormWrapper";
import { FieldValues, SubmitHandler } from "react-hook-form";
import InputItem from "../../components/form/InputItem";
import { Link } from "react-router-dom";
import authSchemaValidation from "../../validation/auth.validation";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

const SignIn = () => {
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
               Sign In
            </Typography>
            <FormWrapper
               onSubmit={onSubmit}
               validationSchema={authSchemaValidation.signIn}
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
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                     />
                  </Grid>
                  <Grid
                     item
                     xs={12}
                  >
                     <InputItem
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                     />
                  </Grid>
               </Grid>
               <ForgotPassword />
               <Button
                  type="submit"
                  size="large"
                  fullWidth
               >
                  Sign In
               </Button>
               <Typography
                  fontWeight={500}
                  color="primary.main"
                  textAlign="center"
                  mt={3}
               >
                  Don’t have an account?{" "}
                  <Link
                     to="/sign-up"
                     style={{ fontWeight: 600 }}
                  >
                     Sign Up
                  </Link>
               </Typography>
            </FormWrapper>
         </Box>
      </Container>
   );
};

export default SignIn;
