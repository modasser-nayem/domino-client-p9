import { z } from "zod";

const addCategory = z.object({
   name: z
      .string({ required_error: "name is required" })
      .refine((value) => value !== "", { message: "name is required" }),
   image: z.string().url().optional(),
});

const updateCategory = z.object({
   name: z
      .string()
      .optional()
      .refine((value) => value !== "", { message: "name is required" }),
   image: z.string().url().optional(),
});

const addSubcategory = z.object({
   category: z
      .string({ required_error: "category is required" })
      .refine((value) => value !== "", { message: "category is required" }),
   name: z
      .string({ required_error: "name is required" })
      .refine((value) => value !== "", { message: "name is required" }),
   image: z.string().url().optional(),
});

const updateSubcategory = z.object({
   category: z
      .string()
      .optional()
      .refine((value) => value !== "", { message: "category is required" }),
   name: z
      .string()
      .optional()
      .refine((value) => value !== "", { message: "name is required" }),
   image: z.string().url().optional(),
});

const categoriesSchemaValidation = {
   addCategory,
   updateCategory,
   addSubcategory,
   updateSubcategory,
};
export default categoriesSchemaValidation;
