/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import { ReactNode, useEffect } from "react";
import {
   FieldValues,
   FormProvider,
   SubmitHandler,
   useForm,
} from "react-hook-form";

type TFormConfig = {
   defaultValues?: Record<string, any>;
   resolver?: any;
};

type TFormWrapperProps = {
   children: ReactNode;
   onSubmit: SubmitHandler<FieldValues>;
   successSubmit?: boolean;
} & TFormConfig;

const FormWrapper = ({
   children,
   onSubmit,
   defaultValues,
   successSubmit,
   resolver,
}: TFormWrapperProps) => {
   const formConfig: TFormConfig = {};

   if (defaultValues) {
      formConfig["defaultValues"] = defaultValues;
   }

   if (resolver) {
      formConfig["resolver"] = resolver;
   }

   const methods = useForm(formConfig);

   const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
      onSubmit(data);
   };

   useEffect(() => {
      if (successSubmit) {
         methods.reset();
      }
   }, [successSubmit, methods]);

   return (
      <FormProvider {...methods}>
         <Box
            component="form"
            onSubmit={methods.handleSubmit(onSubmitHandler)}
         >
            {children}
         </Box>
      </FormProvider>
   );
};

export default FormWrapper;
