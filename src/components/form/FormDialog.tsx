import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ReactNode, useState } from "react";
import { Box, Button, IconButton, SxProps, Typography } from "@mui/material";
import FormWrapper from "./FormWrapper";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { Theme } from "@emotion/react";
import { ZodType } from "zod";

type TFormDialogProps = {
   children: ReactNode;
   titleText: string;
   submitBtnText?: string;
   titleSx?: SxProps<Theme>;
   onSubmit: SubmitHandler<FieldValues>;
   successSubmit?: boolean;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   defaultValues?: Record<string, any>;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   validationSchema?: ZodType<any, any, any>;
};

const FormDialog = ({
   children,
   titleText,
   titleSx,
   submitBtnText,
   onSubmit,
   successSubmit,
   defaultValues,
   validationSchema,
}: TFormDialogProps) => {
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleOnSubmit = (
      data: FieldValues,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      event?: React.BaseSyntheticEvent<object, any, any> | undefined
   ) => {
      if (event) {
         event.stopPropagation();
      }
      onSubmit(data);
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
            Open Form
         </Typography>
         <Dialog
            open={open}
            onClose={handleClose}
         >
            <Box
               sx={{
                  padding: 4,
               }}
            >
               <FormWrapper
                  onSubmit={handleOnSubmit}
                  successSubmit={successSubmit}
                  validationSchema={validationSchema}
                  defaultValues={defaultValues}
               >
                  <DialogTitle sx={{ ...titleSx, fontSize: 24 }}>
                     {titleText}
                  </DialogTitle>
                  <DialogContent>{children}</DialogContent>
                  <DialogActions>
                     <IconButton
                        onClick={handleClose}
                        sx={{
                           position: "absolute",
                           top: 0,
                           right: 0,
                        }}
                     >
                        <CloseIcon sx={{ fontSize: 30 }} />
                     </IconButton>
                     <Button
                        fullWidth
                        type="submit"
                        size="large"
                     >
                        {submitBtnText ? submitBtnText : "Submit"}
                     </Button>
                  </DialogActions>
               </FormWrapper>
            </Box>
         </Dialog>
      </Box>
   );
};

export default FormDialog;
