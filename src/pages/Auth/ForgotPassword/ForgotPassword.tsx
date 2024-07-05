import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormEvent, useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { toast } from "sonner";
import { useForgotPasswordMutation } from "../../../redux/api/authApi";
import { isRtqQueryError } from "../../../redux/api/baseApi";

const ForgotPassword = () => {
   const [open, setOpen] = useState(false);
   const [emailError, setEmailError] = useState("");

   const [forgotPassword, { data, error, isLoading }] =
      useForgotPasswordMutation();

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      event.stopPropagation();
      const formData = new FormData(event.currentTarget);
      const formJson = Object.fromEntries(formData.entries());
      const email = formJson.email as string;

      try {
         if (!email) {
            setEmailError("Email is required");
         } else {
            forgotPassword({ email: email });
         }
      } catch (error) {
         toast.error("Something went wrong! try again");
      }
   };

   useEffect(() => {
      if (data) {
         toast.success(data.message);
         handleClose();
      }

      if (isRtqQueryError(error)) {
         toast.error(error.data.message);
      }
   }, [data, error]);

   return (
      <Box>
         <Typography
            onClick={handleClickOpen}
            fontWeight={500}
            textAlign="right"
            color="primary.main"
            pt={2}
            pb={3}
            sx={{ cursor: "pointer" }}
         >
            Forgot Password
         </Typography>
         <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
               component: "form",
               onSubmit: handleOnSubmit,
               sx: {
                  p: 4,
                  width: { sm: 400 },
               },
            }}
         >
            <DialogTitle fontSize={24}>Forgot Password</DialogTitle>
            <DialogContent>
               <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  name="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  error={emailError ? true : false}
                  helperText={emailError}
               />
            </DialogContent>
            <DialogActions>
               <Button
                  variant="outlined"
                  onClick={handleClose}
               >
                  Cancel
               </Button>
               <Button
                  disabled={isLoading}
                  type="submit"
               >
                  Submit
               </Button>
            </DialogActions>
         </Dialog>
      </Box>
   );
};

export default ForgotPassword;
