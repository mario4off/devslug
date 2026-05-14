import { z } from "zod";

export const guestUrlFormSchema = z.object({
  url: z
    .string()
    .min(3, { message: "La URL debe tener al menos 3 caracteres de longitud." })
    .max(250, {
      message: "La URL no puede exceder 250 caracteres de longitud.",
    }),
});

export type FormState = {
  success?: boolean;
  message?: string;
  data?: {
    url?: string | null;
    slug?: string;
  };
  errors?: { url?: string[] };
};
