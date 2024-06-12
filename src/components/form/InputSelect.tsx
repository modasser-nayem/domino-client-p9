import {
   FormControl,
   FormHelperText,
   InputLabel,
   MenuItem,
   Select,
} from "@mui/material";
import { Controller } from "react-hook-form";

type TInputSelectProps = {
   label: string;
   name: string;
   options: {
      label: string;
      value: string;
   }[];
   required?: boolean;
   readOnly?: boolean;
};

const InputSelect = ({
   label,
   name,
   options,
   required,
   readOnly,
}: TInputSelectProps) => {
   return (
      <Controller
         name={name}
         render={({ field, fieldState: { error } }) => (
            <FormControl
               fullWidth
               error={!!error}
            >
               <InputLabel id="select-label">{label}</InputLabel>
               <Select
                  {...field}
                  labelId="select-label"
                  id="select"
                  value={field.value ?? ""}
                  label={label}
                  required={required}
                  readOnly={readOnly}
               >
                  {options.map((option) => (
                     <MenuItem
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
