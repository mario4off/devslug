"use server";

import { guestUrlFormSchema } from "@/validations/url";
import { type UrlFormState } from "@/validations/url";
import { z } from "zod";
import prisma from "@/lib/db/db";
import { generateSlug } from "../utils/url";

export async function insertUrl(
  prevState: UrlFormState,
  formdata: FormData,
): Promise<UrlFormState> {
  const guestUrl = {
    url: formdata.get("url") as string,
  };
  const slug = generateSlug();

  const validatedSchema = guestUrlFormSchema.safeParse(guestUrl);

  if (!validatedSchema.success) {
    const flattenedErrors = z.flattenError(validatedSchema.error);

    return {
      success: false,
      message: "Validation error",
      ...prevState.data,
      errors: flattenedErrors.fieldErrors,
    };
  }

  const result = await prisma.url.create({
    data: {
      slug: slug,
      originalUrl: validatedSchema.data.url,
    },
  });

  return {
    success: true,
    message: "Url registered",
    data: {
      ...result,
    },
  };
}
