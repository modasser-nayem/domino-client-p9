export type TAuthUser = {
   id: string;
   role: string;
   iat: number;
   exp: number;
};

export type TAuthSlice = {
   user: TAuthUser | null;
   token: string | null;
};
