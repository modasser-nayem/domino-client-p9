import { z } from "zod";

const signUp = z
   .object({
      name: z
         .string({ required_error: "name is required" })
         .refine((value) => value !== "", { message: "name is required" }),
      email: z
         .string({ required_error: "email is required" })
         .email({ message: "invalid email address" }),
      contactNo: z
         .string({ required_error: "contactNo is required" })
         .refine((value) => value !== "", { message: "contactNo is required" }),
      password: z
         .string({ required_error: "password is required" })
         .refine((value) => value !== "", { message: "password is required" })
         .refine((value) => value.length >= 6, {
            message: "password must be more then 5 character",
         }),
      confirmPassword: z
         .string({ required_error: "confirmPassword is required" })
         .refine((value) => value !== "", {
            message: "confirmPassword is required",
         }),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
   });

const signIn = z.object({
   email: z
      .string({ required_error: "email is required" })
      .email({ message: "invalid email address" })
      .refine((value) => value !== "", { message: "email is required" }),
   password: z
      .string({ required_error: "password is required" })
      .refine((value) => value !== "", { message: "password is required" }),
});

const authSchemaValidation = { signUp, signIn };
export default authSchemaValidation;
