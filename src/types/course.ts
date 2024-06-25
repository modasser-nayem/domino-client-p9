export type TCourseLevel = "beginner" | "intermediate" | "advanced";
export type TCoursePriceType = "free" | "paid";

export type TCourseStatus = "upcoming" | "ongoing" | "close";

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
