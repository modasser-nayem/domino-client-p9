import {
   Box,
   CircularProgress,
   SxProps,
   Theme,
   Typography,
} from "@mui/material";

type LoadingProps = {
   sx?: SxProps<Theme>;
   circleSx?: SxProps<Theme>;
};

const Loading = ({ sx, circleSx }: LoadingProps) => {
   return (
      <Box
         sx={{
            ...sx,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
         }}
      >
         <Typography
            fontSize={24}
            fontWeight={600}
         >
            Loading
         </Typography>{" "}
         <CircularProgress
            size={24}
            sx={{ ...circleSx }}
         />
      </Box>
   );
};

export default Loading;
