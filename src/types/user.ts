import { z } from "zod";
import authSchemaValidation from "../validation/auth.validation";

export type TUserRole = "admin" | "instructor" | "student";
export type TUserStatus = "unblock" | "blocked";

export type TGetAllUser = {
   _id: string;
   name: string;
   email: string;
   role: TUserRole;
   status: TUserStatus;
   profileImg: string;
};

export type TUpdateProfile = z.infer<
   typeof authSchemaValidation.updateMyProfile
>;

export type TUpdateUserRole = {
   userId: string;
   role: TUserRole;
};

export type TUpdateUserStatus = {
   userId: string;
   status: TUserStatus;
};

export type TGetMyProfile = {
   address?: {
      country: string;
      district: string;
      state: string;
   };
   education?: MyProfileEducation;
   socialLinks?: MyProfileSocialLinks;
   _id: string;
   user: MyProfileUser;
   contactNo?: string;
   skills: string[];
   createdAt: string;
   updatedAt: string;
   about?: string;
   bloodGroup?: string;
   dateOfBirth?: string;
   designation?: string;
   gender?: string;
   language?: Record<string, string>;
};

export type TGetSingleUser = {
   address?: {
      country: string;
      district: string;
      state: string;
   };
   education?: MyProfileEducation;
   socialLinks?: MyProfileSocialLinks;
   _id: string;
   user: MyProfileUser;
   contactNo?: string;
   skills: string[];
   createdAt: string;
   updatedAt: string;
   about?: string;
   bloodGroup?: string;
   dateOfBirth?: string;
   designation?: string;
   gender?: string;
   language?: Record<string, string>;
};

export interface Address {
   country: string;
   district: string;
   state: string;
}

export interface MyProfileEducation {
   institute: string;
   subject: string;
   startYear: string;
   passingYear?: string;
   isComplete: boolean;
}

export interface MyProfileSocialLinks {
   facebook?: string;
   twitter?: string;
   linkedIn?: string;
   youtube?: string;
   website?: string;
}

export interface MyProfileUser {
   _id: string;
   name: string;
   email: string;
   lastLogin: string;
   profileImg?: string;
}
