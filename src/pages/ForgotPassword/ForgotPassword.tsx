import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormEvent, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const ForgotPassword = () => {
   const [open, setOpen] = useState(false);

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
      const email = formJson.email;
      console.log(email);
      handleClose();
   };

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
                  required
                  margin="dense"
                  id="name"
                  name="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
               />
            </DialogContent>
            <DialogActions>
               <Button
                  variant="outlined"
                  onClick={handleClose}
               >
                  Cancel
               </Button>
               <Button type="submit">Submit</Button>
            </DialogActions>
         </Dialog>
      </Box>
   );
};

export default ForgotPassword;
