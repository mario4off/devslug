import { z } from "zod";

export const urlFormSchema = z.object({
  url: z.url("Debes introducir una URL válida."),
  slug: z.string("Debes introducir un string."),
});
