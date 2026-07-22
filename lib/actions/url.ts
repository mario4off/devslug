"use server";

import { urlFormSchema } from "@/validations/url";
import { type UrlFormState } from "@/types/validations";
import { z } from "zod";
import prisma from "@/lib/db";
import { extractMetaDataFromUrl } from "@/services/metada.service";
import { generateSlug } from "../utils/url";
import { createShortUrl } from "@/services/url.service";

export async function insertUrl(
  prevState: UrlFormState,
  formdata: FormData,
): Promise<UrlFormState> {
  const guestUrl = {
    url: formdata.get("url") as string,
  };

  const validatedSchema = urlFormSchema.safeParse(guestUrl);

  if (!validatedSchema.success) {
    const flattenedErrors = z.flattenError(validatedSchema.error);
    console.log("mierda");
    return {
      success: false,
      message: "Error de validación URL",
      ...prevState.data,
      errors: flattenedErrors.fieldErrors,
    };
  }

  const result = await createShortUrl(validatedSchema.data.url);

  return {
    success: true,
    message: "Url registered",
    data: {
      ...result,
    },
  };
}
