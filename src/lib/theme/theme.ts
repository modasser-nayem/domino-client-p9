import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
   palette: {
      primary: {
         main: "#1F305E",
         // gray1: #CFD4DE
         // gray2: #F0F2F6
         // secondary2: #F8E8E8
      },
      secondary: {
         main: "#ED9691",
      },
      grey: {
         A100: "#CFD4DE",
         A200: "#F0F2F6",
      },
   },
   components: {
      MuiButton: {
         defaultProps: {
            variant: "contained",
         },
      },
      MuiContainer: {
         defaultProps: {
            maxWidth: "xl",
         },
      },
   },
});
