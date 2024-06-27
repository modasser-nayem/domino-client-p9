import { Controller } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import { SxProps, Theme } from "@mui/system";

type TInputMultipleSelectProps = {
   label: string;
   name: string;
   placeholder?: string;
   required?: boolean;
   sx?: SxProps<Theme>;
};

const InputMultipleSelect = ({
   label,
   name,
   placeholder,
   required,
   sx,
}: TInputMultipleSelectProps) => {
   const handleValueChange = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      _event: any,
      newValue: string[],
      onChange: (value: string[]) => void
   ) => {
      // Ensure the value array contains unique elements
      const uniqueValue = Array.from(new Set(newValue));
      onChange(uniqueValue);
   };

   return (
      <Controller
         name={name}
         render={({ field, fieldState: { error } }) => (
            <>
               <Autocomplete
                  sx={sx}
                  fullWidth
                  multiple
                  id="tags-filled"
                  options={[]} // Provide an empty array to satisfy the TypeScript requirement
                  freeSolo
                  value={field.value || []}
                  onChange={(event, newValue) =>
                     handleValueChange(event, newValue, field.onChange)
                  }
                  renderTags={(value, getTagProps) =>
                     value.map((option, index) => {
                        const { key, ...tagProps } = getTagProps({ index });
                        return (
                           <Chip
                              variant="outlined"
                              label={option}
                              key={key}
                              {...tagProps}
                           />
                        );
                     })
                  }
                  renderInput={(params) => (
                     <TextField
                        {...params}
                        label={label}
                        type="text"
                        placeholder={placeholder}
                        error={!!error}
                        required={required}
                        helperText={
                           error && (
                              <Typography
                                 display="flex"
                                 alignItems="center"
                                 gap={1}
                                 component="span"
                              >
                                 <ErrorIcon sx={{ fontSize: 16 }} />{" "}
                                 {error.message}
                              </Typography>
                           )
                        }
                     />
                  )}
               />
            </>
         )}
      />
   );
};

export default InputMultipleSelect;
