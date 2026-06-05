import { z } from "zod";

export const urlFormSchema = z.object({
  url: z.url("Debes introducir una URL valida."),
  userId: z.int().positive().optional(),
});
