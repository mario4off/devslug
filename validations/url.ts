import { z } from "zod";

export const urlFormSchema = z.object({
  url: z.url(),
  userId: z.int().positive().optional(),
});
