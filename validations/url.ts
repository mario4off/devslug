import { z } from "zod";

export const urlFormSchema = z.object({
  url: z.url(),
  slug: z.string().length(7),
  userId: z.int().positive().optional(),
});
