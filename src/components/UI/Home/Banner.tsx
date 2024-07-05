import { Box, Button, Stack, Typography } from "@mui/material";

const Banner = () => {
   return (
      <Box
         sx={{
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               gap: 4,
               textAlign: "center",
            }}
         >
            <Typography
               component="h3"
               sx={{
                  fontSize: {
                     xs: 18,
                     md: 24,
                  },
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: 2,
               }}
            >
               Online teaching marketplace & e-learning platform
            </Typography>
            <Typography
               component="h1"
               sx={{
                  fontSize: {
                     xs: 24,
                     md: 34,
                  },
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
               }}
            >
               Teach Anything, Learn Anytime
            </Typography>
            <Typography
               sx={{
                  maxWidth: 600,
               }}
            >
               Upload your course tutorial & become an online teacher. Earn as
               much as you can, it's FREE! Also, Browse our course categories
               where you can develop your skills anytime from the best
               professionals.
            </Typography>
            <Stack
               direction={{
                  sm: "row",
               }}
               gap={{ xs: 2, sm: 4 }}
            >
               <Button
                  color="warning"
                  size="large"
                  sx={{ py: { md: 2 }, px: { md: 4 } }}
               >
                  Start Teaching
               </Button>
               <Button
                  size="large"
                  sx={{ py: { md: 2 }, px: { md: 4 } }}
               >
                  Start Learning
               </Button>
            </Stack>
         </Box>
      </Box>
   );
};

export default Banner;
