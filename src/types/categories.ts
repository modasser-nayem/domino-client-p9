import { z } from "zod";
import categoriesSchemaValidation from "../validation/category.validation";

export type TAddCategory = z.infer<
   typeof categoriesSchemaValidation.addCategory
>;

export type TUpdateCategory = z.infer<
   typeof categoriesSchemaValidation.updateCategory
>;

export type TAddSubcategory = z.infer<
   typeof categoriesSchemaValidation.addSubcategory
>;

export type TUpdateSubcategory = z.infer<
   typeof categoriesSchemaValidation.updateSubcategory
>;

export type TGetAllCategory = {
   _id: string;
   name: string;
   image?: string;
   createdAt: string;
   subcategories?: {
      _id: string;
      name: string;
      image?: string;
      createdAt: string;
   }[];
}[];

export type TGetAllSubcategory = {
   _id: string;
   category: {
      _id: string;
      name: string;
      image?: string;
   };
   name: string;
   image?: string;
}[];
