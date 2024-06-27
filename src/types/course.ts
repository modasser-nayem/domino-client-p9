import { z } from "zod";
import courseSchemaValidation from "../validation/course.validation";
import {
   COURSE_LEVEL,
   COURSE_PRICE_TYPE,
   COURSE_STATUS,
} from "../constant/course";

export type TCourseLevel = keyof typeof COURSE_LEVEL;
export type TCoursePriceType = keyof typeof COURSE_PRICE_TYPE;

export type TCourseStatus = keyof typeof COURSE_STATUS;

export type TCreateCourse = z.infer<typeof courseSchemaValidation.createCourse>;

export type TUpdateCourse = z.infer<typeof courseSchemaValidation.updateCourse>;

export type TUpdateCourseStatus = z.infer<
   typeof courseSchemaValidation.updateCourseStatus
>;

export type TGetAllCourse = {
   _id: string;
   instructor: {
      _id: string;
      name: string;
   };
   title: string;
   thumbnail_url: string;
   level: TCourseLevel;
   price: number;
   priceType: TCoursePriceType;
   language: string;
   status: TCourseStatus;
};

export type TGetSingleCourse = {
   _id: string;
   instructor: {
      _id: string;
      name: string;
   };
   title: string;
   thumbnail_url: string;
   subcategory: string;
   level: TCourseLevel;
   price: number;
   priceType: TCoursePriceType;
   description: string;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   features: string[];
   language: string;
   tags: string[];
   status: TCourseStatus;
};
