import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useGetSingleUserQuery } from "../../../redux/api/userApi";
import Loading from "../../shared/Loading/Loading";

const DetailsModel = ({ userId }: { userId: string }) => {
   const [open, setOpen] = React.useState(false);
   const theme = useTheme();
   const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const { data } = useGetSingleUserQuery({ id: userId });

   console.log(data);

   return (
      <React.Fragment>
         <Button
            size="small"
            onClick={handleClickOpen}
         >
            Details
         </Button>
         <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
         >
            <DialogTitle id="responsive-dialog-title">
               {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
               {data?.data ? (
                  <Box>
                     <Typography>{data.data._id}</Typography>
                  </Box>
               ) : (
                  <Loading />
               )}
            </DialogContent>
            <DialogActions>
               <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={handleClose}
                  sx={{
                     position: "absolute",
                     top: 1,
                     right: 1,
                  }}
               >
                  <CloseIcon />
               </IconButton>
            </DialogActions>
         </Dialog>
      </React.Fragment>
   );
};

export default DetailsModel;
