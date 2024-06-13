/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "@mui/material";
import { ReactNode, useEffect } from "react";
import {
   FieldValues,
   FormProvider,
   Resolver,
   SubmitHandler,
   useForm,
} from "react-hook-form";
import { ZodType } from "zod";

type TFormConfig = {
   defaultValues?: Record<string, any>;
   resolver?: Resolver;
};

type TFormWrapperProps = {
   children: ReactNode;
   onSubmit: SubmitHandler<FieldValues>;
   successSubmit?: boolean;
   defaultValues?: Record<string, any>;
   validationSchema?: ZodType<any, any, any>;
};

const FormWrapper = ({
   children,
   onSubmit,
   defaultValues,
   successSubmit,
   validationSchema,
}: TFormWrapperProps) => {
   const formConfig: TFormConfig = {};

   if (defaultValues) {
      formConfig["defaultValues"] = defaultValues;
   }

   if (validationSchema) {
      formConfig["resolver"] = zodResolver(validationSchema);
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
