"use server";

import { urlFormSchema } from "@/validations/url";
import { type UrlFormState } from "@/types/validations";
import { z } from "zod";
import { createShortUrl } from "@/services/url.service";
import { deleteUrl } from "@/repositories/url.repository";
import { auth } from "@/auth";

export async function insertUrlAction(
  prevState: UrlFormState,
  formdata: FormData,
): Promise<UrlFormState> {
  const session = await auth();
  const guestUrl = {
    url: formdata.get("url") as string,
    slug: formdata.get("slug") as string,
  };

  const userId = session?.user?.id || null;

  const validatedSchema = urlFormSchema.safeParse(guestUrl);

  if (!validatedSchema.success) {
    const flattenedErrors = z.flattenError(validatedSchema.error);

    return {
      success: false,
      message: "Error de validación URL",
      ...prevState.data,
      errors: flattenedErrors.fieldErrors,
    };
  }

  const result = await createShortUrl({ ...validatedSchema.data, userId });

  console.log("vamos con la nueva url", result);

  return {
    success: true,
    message: "Url registered",
    data: {
      ...result,
    },
  };
}

export async function deleteUrlAction(urlId: number) {
  console.log("Borramos la URL", urlId);
  return deleteUrl(urlId);
}

export async function insertUserUrlAction() {}
