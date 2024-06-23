import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment, { Moment } from "moment";

type TInputDatePickerProps = {
   label: string;
   name: string;
   required?: boolean;
   readOnly?: boolean;
};

const InputDatePicker = ({
   label,
   name,
   required,
   readOnly,
}: TInputDatePickerProps) => {
   return (
      <Controller
         name={name}
         render={({
            field: { onChange, value, ref, ...field },
            fieldState: { error },
         }) => (
            <LocalizationProvider dateAdapter={AdapterMoment}>
               <DatePicker
                  {...field}
                  value={value ? moment(value) : null} // Convert value to Moment object
                  onChange={(date: Moment | null) =>
                     onChange(date ? date.toISOString() : null)
                  } // Convert date to ISO string
                  slotProps={{
                     textField: {
                        label,
                        required,
                        error: !!error,
                        helperText: error?.message,
                        InputProps: {
                           readOnly: readOnly,
                        },
                        inputRef: ref,
                     },
                  }}
               />
            </LocalizationProvider>
         )}
      />
   );
};

export default InputDatePicker;
