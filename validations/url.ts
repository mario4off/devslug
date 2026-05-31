import { z } from "zod";

export const guestUrlFormSchema = z.object({
  url: z
    .string()
    .min(3, { message: "La URL debe tener al menos 3 caracteres." })
    .max(250, {
      message: "La URL no puede exceder 250 caracteres.",
    }),
  slug: z
    .string()
    .min(3, { message: "El slug debe tener al menos 3 carácteres." })
    .max(10, { message: "El slug no puede tener más de 10 caracteres" }),
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
