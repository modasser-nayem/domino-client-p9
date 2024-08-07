import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
   Button,
   Container,
   Grid,
   Stack,
   Typography,
} from "@mui/material";
import FormWrapper from "../../../components/form/FormWrapper";
import { FieldValues, SubmitHandler } from "react-hook-form";
import InputItem from "../../../components/form/InputItem";
import { Link, useNavigate } from "react-router-dom";
import authSchemaValidation from "../../../validation/auth.validation";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import { useEffect } from "react";
import { useLoginUserMutation } from "../../../redux/api/authApi";
import { toast } from "sonner";
import { isRtqQueryError } from "../../../redux/api/baseApi";
import { decodedToken } from "../../../utils/jwt";
import { useAppDispatch } from "../../../redux/hooks";
import { logInUser } from "../../../redux/features/auth/authSlice";
import { TAuthUser } from "../../../types/auth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SignIn = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();

   const [signInUser, { data, error, isLoading }] = useLoginUserMutation();

   const onSubmit: SubmitHandler<FieldValues> = (formData) => {
      try {
         const modifyData = {
            email: formData.email,
            password: formData.password,
         };

         signInUser(modifyData);
      } catch (error) {
         toast.error("Something went wrong! try again");
      }
   };

   useEffect(() => {
      if (data) {
         toast.success(data.message);
         const token = data?.data?.access_token;
         const user = decodedToken(token) as TAuthUser;
         dispatch(logInUser({ token, user }));
         navigate("/");
      }

      if (isRtqQueryError(error)) {
         toast.error(error.data.message);
      }
   }, [data, error, dispatch, navigate]);

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
            <Accordion
               sx={{
                  border: "none",
                  width: "fit-content",
                  boxShadow: "none",
               }}
            >
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
               >
                  see credential
               </AccordionSummary>
               <AccordionDetails>
                  <Box
                     display="flex"
                     flexDirection="column"
                     gap={2}
                  >
                     <Stack>
                        <Typography fontSize={14}>
                           Student Email: student@gmail.com
                        </Typography>
                        <Typography fontSize={14}>
                           Student Password: 123456
                        </Typography>
                     </Stack>
                     <Stack>
                        <Typography fontSize={14}>
                           instructor Email: instructor@gmail.com
                        </Typography>
                        <Typography fontSize={14}>
                           instructor Password: 123456
                        </Typography>
                     </Stack>
                     <Stack>
                        <Typography fontSize={14}>
                           admin Email: admin@gmail.com
                        </Typography>
                        <Typography fontSize={14}>
                           admin Password: 123456
                        </Typography>
                     </Stack>
                  </Box>
               </AccordionDetails>
            </Accordion>
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
                  disabled={isLoading}
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
