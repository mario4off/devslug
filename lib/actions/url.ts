"use server";

import { guestUrlFormSchema } from "@/validations/url";
import { type FormState } from "@/validations/url";
import { z } from "zod";

export async function insertUrl(
  prevState: FormState,
  formdata: FormData,
): Promise<FormState> {
  const url = formdata.get("url") as string;

  const result = guestUrlFormSchema.safeParse({ url });

  if (!result.success) {
    const flattenedErrors = z.flattenError(result.error);
    console.log("Validation errors:", flattenedErrors.fieldErrors);

    return {
      success: false,
      message: "Validation error",
      ...prevState.data,
      errors: flattenedErrors.fieldErrors,
    };
  }

  return {
    success: true,
    message: "Url registered",
    data: {
      url: url,
      slug: url,
    },
  };
}
