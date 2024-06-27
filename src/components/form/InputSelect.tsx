import {
   FormControl,
   FormHelperText,
   InputLabel,
   MenuItem,
   Select,
   SxProps,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { TInputSelectOption } from "../../types/global";
import { Theme } from "@emotion/react";

type TInputSelectProps = {
   label: string;
   name: string;
   options: TInputSelectOption[];
   required?: boolean;
   readOnly?: boolean;
   labelSx?: SxProps<Theme>;
   sx?: SxProps<Theme>;
};

const InputSelect = ({
   label,
   name,
   options,
   required,
   readOnly,
   labelSx,
   sx,
}: TInputSelectProps) => {
   return (
      <Controller
         name={name}
         render={({ field, fieldState: { error } }) => (
            <FormControl
               fullWidth
               error={!!error}
            >
               <InputLabel
                  sx={{ ...labelSx, textTransform: "capitalize" }}
                  id="select-label"
               >
                  {label}
               </InputLabel>
               <Select
                  {...field}
                  labelId="select-label"
                  id="select"
                  value={field.value ?? ""}
                  label={label}
                  required={required}
                  readOnly={readOnly}
                  sx={{ ...sx, textTransform: "capitalize" }}
               >
                  {options.map((option) => (
                     <MenuItem
                        sx={{
                           textTransform: "capitalize",
                        }}
                        key={option.value}
                        value={option.value}
                     >
                        {option.label}
                     </MenuItem>
                  ))}
               </Select>
               <FormHelperText>{error?.message}</FormHelperText>
            </FormControl>
         )}
      />
   );
};

export default InputSelect;
