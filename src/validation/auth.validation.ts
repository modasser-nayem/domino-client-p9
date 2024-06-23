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

const changePassword = z
   .object({
      currentPassword: z
         .string({ required_error: "currentPassword is required" })
         .refine((value) => value !== "", {
            message: "Current password is required",
         }),
      newPassword: z
         .string({ required_error: "newPassword is required" })
         .refine((value) => value !== "", {
            message: "New password is required",
         })
         .refine((value) => value.length >= 6, {
            message: "New password must be more then 5 character",
         }),
      confirmPassword: z
         .string({ required_error: "confirmPassword is required" })
         .refine((value) => value !== "", {
            message: "Confirm Password is required",
         }),
   })
   .refine((data) => data.newPassword === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
   });

const resetPassword = z
   .object({
      newPassword: z
         .string({ required_error: "newPassword is required" })
         .refine((value) => value !== "", {
            message: "New password is required",
         })
         .refine((value) => value.length >= 6, {
            message: "New password must be more then 5 character",
         }),
      confirmPassword: z
         .string({ required_error: "confirmPassword is required" })
         .refine((value) => value !== "", {
            message: "Confirm Password is required",
         }),
   })
   .refine((data) => data.newPassword === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
   });

const updateMyProfile = z.object({
   user: z
      .object({
         name: z.string().optional(),
         profileImg: z.string().url().optional(),
         email: z.string().email().optional(),
      })
      .optional(),
   designation: z.string().optional(),
   about: z.string().optional(),
   gender: z.enum(["male", "female"]).optional(),
   dateOfBirth: z.string().datetime().optional(),
   bloodGroup: z
      .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
      .optional(),
   contactNo: z.string().optional(),
   // language: z.optional(
   //    z.record(
   //       z.string(),
   //       z.enum(["Native", "Fluent", "Proficient", "Intermediate", "Basic"])
   //    )
   // ),
   address: z
      .object({
         country: z.string(),
         district: z.string(),
         state: z.string(),
      })
      .optional(),
   skills: z.array(z.string()).optional(),
   education: z
      .object({
         institute: z.string(),
         subject: z.string(),
         startYear: z.string().datetime(),
         passingYear: z.string().datetime(),
         isComplete: z.boolean(),
      })
      .optional(),
   socialLinks: z
      .object({
         facebook: z.string().url(),
         twitter: z.string().url(),
         linkedIn: z.string().url(),
         youtube: z.string().url(),
         website: z.string().url(),
      })
      .optional(),
});

const authSchemaValidation = {
   signUp,
   signIn,
   changePassword,
   resetPassword,
   updateMyProfile,
};
export default authSchemaValidation;
