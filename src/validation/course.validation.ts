import { z } from "zod";

const createCourse = z.object({
   title: z
      .string({ required_error: "title is required" })
      .refine((value) => value !== "", { message: "title is required" }),
   thumbnail_url: z
      .string({ required_error: "thumbnail_url is required" })
      .url()
      .refine((value) => value !== "", {
         message: "thumbnail_url is required",
      }),
   subcategory: z
      .string({ required_error: "subcategory is required" })
      .refine((value) => value !== "", { message: "subcategory is required" }),
   level: z.enum(["beginner", "intermediate", "advanced"], {
      required_error: "level is required",
   }),
   price: z
      .string({ required_error: "price is required" })
      .min(0, { message: "Price not be a negative number" })
      .transform((value) => Number(value)),
   priceType: z.enum(["free", "paid"]).optional(),
   description: z
      .string({ required_error: "description is required" })
      .refine((value) => value !== "", { message: "description is required" }),
   features: z
      .array(
         z.string().refine((value) => value !== "", {
            message: "features value is not empty",
         })
      )
      .optional(),
   language: z
      .string({ required_error: "language is required" })
      .refine((value) => value !== "", { message: "language is required" }),
   tags: z
      .array(
         z.string().refine((value) => value !== "", {
            message: "tags value is not empty",
         })
      )
      .optional(),
});

const updateCourse = z.object({
   title: z
      .string()
      .refine((value) => value !== "", { message: "title is required" })
      .optional(),
   thumbnail_url: z
      .string()
      .url()
      .refine((value) => value !== "", { message: "thumbnail_url is required" })
      .optional(),
   subcategory: z
      .string()
      .refine((value) => value !== "", { message: "subcategory is required" })
      .optional(),
   level: z.enum(["beginner", "intermediate", "advanced"]).optional(),
   price: z
      .number()
      .min(0, { message: "Price not be a negative number" })
      .optional(),
   priceType: z.enum(["free", "paid"]).optional(),
   description: z
      .string()
      .refine((value) => value !== "", { message: "description is required" })
      .optional(),
   features: z
      .array(
         z.string().refine((value) => value !== "", {
            message: "features value is not empty",
         })
      )
      .optional(),
   language: z
      .string()
      .refine((value) => value !== "", { message: "language is required" })
      .optional(),
   tags: z
      .array(
         z.string().refine((value) => value !== "", {
            message: "tags value is not empty",
         })
      )
      .optional(),
});

const updateCourseStatus = z.object({
   courseId: z
      .string({ required_error: "courseId is required" })
      .refine((value) => value !== "", { message: "courseId is required" }),
   status: z.enum(["upcoming", "ongoing", "close"], {
      required_error: "status is required",
   }),
});

const courseSchemaValidation = {
   createCourse,
   updateCourse,
   updateCourseStatus,
};
export default courseSchemaValidation;
