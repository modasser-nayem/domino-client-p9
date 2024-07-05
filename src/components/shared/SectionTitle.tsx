import { Theme } from "@emotion/react";
import { Box, Grid, SxProps, Typography } from "@mui/material";

type SectionTitleProps = {
   title: string;
   titleSX?: SxProps<Theme>;
   sx?: SxProps<Theme>;
   bar?: boolean;
};

const SectionTitle = ({
   bar = true,
   title,
   titleSX,
   sx,
}: SectionTitleProps) => {
   return (
      <Box sx={{ pb: 10, ...sx }}>
         <Typography
            sx={{
               fontSize: 24,
               fontWeight: 600,
               textAlign: "center",
               textTransform: "uppercase",
               pb: 2,
               ...titleSX,
            }}
         >
            {title}
         </Typography>
         {bar && (
            <Grid
               container
               justifyContent="center"
            >
               <Grid
                  xs={3}
                  item
                  sx={{
                     width: "100%",
                     height: 2,
                     bgcolor: "primary.main",
                  }}
               ></Grid>
               {/* --------------- */}
               <Grid
                  xs={1}
                  item
                  sx={{
                     width: "100%",
                     height: 2,
                     bgcolor: "warning.main",
                  }}
               ></Grid>
               <Grid
                  xs={1}
                  item
                  sx={{
                     width: "100%",
                     height: 2,
                     bgcolor: "warning.main",
                  }}
               ></Grid>
               {/* ----------- */}
               <Grid
                  xs={3}
                  item
                  sx={{
                     width: "100%",
                     height: 2,
                     bgcolor: "primary.main",
                  }}
               ></Grid>
            </Grid>
         )}
      </Box>
   );
};

export default SectionTitle;
