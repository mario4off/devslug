import { z } from "zod";

export const urlFormSchema = z.object({
  url: z.url(),
  slug: z.string().length(7),
  userId: z.int().positive,
});

export type UrlFormState = {
  success?: boolean;
  message?: string;
  data?: {
    url?: string | null;
    slug?: string;
    userId: string | null;
  };
  errors?: { url?: string[] };
};
