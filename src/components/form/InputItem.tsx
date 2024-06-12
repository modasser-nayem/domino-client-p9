import { Theme } from "@emotion/react";
import ErrorIcon from "@mui/icons-material/Error";
import { SxProps, TextField, Typography } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";
import { Controller } from "react-hook-form";

type TInputItemProps = {
   label: string;
   type: HTMLInputTypeAttribute;
   name: string;
   placeholder?: string;
   required?: boolean;
   readOnly?: boolean;
   sx?: SxProps<Theme>;
};

const InputItem = ({
   label,
   type,
   name,
   placeholder,
   required,
   readOnly,
   sx,
}: TInputItemProps) => {
   return (
      <Controller
         name={name}
         render={({ field, fieldState: { error } }) => (
            <TextField
               sx={sx}
               fullWidth
               {...field}
               value={field.value ?? ""}
               label={label}
               type={type}
               placeholder={placeholder}
               required={required}
               error={!!error}
               helperText={
                  error && (
                     <Typography
                        display="flex"
                        alignItems="center"
                        gap={1}
                     >
                        <ErrorIcon sx={{ fontSize: 16 }} /> {error?.message}
                     </Typography>
                  )
               }
               InputProps={{
                  readOnly: readOnly,
               }}
            />
         )}
      />
   );
};

export default InputItem;
