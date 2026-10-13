"use server";

import { urlFormSchema } from "@/validations/url";
import { type UrlFormState } from "@/types/validations";
import { z } from "zod";
import { createShortUrl } from "@/services/url.service";
import { deleteUrl } from "@/repositories/url.repository";
import { auth } from "@/auth";
import { Prisma } from "../generated/prisma/client";

export async function insertUrlAction(
  prevState: UrlFormState,
  formdata: FormData,
): Promise<UrlFormState> {
  const session = await auth();
  const urlData = {
    url: formdata.get("url") as string,
    slug: (formdata.get("slug") as string) ?? undefined,
  };

  const userId = session?.user?.id || null;

  const validatedSchema = urlFormSchema.safeParse(urlData);

  if (!validatedSchema.success) {
    const flattenedErrors = z.flattenError(validatedSchema.error);

    return {
      success: false,
      message: "Error de validación URL",
      ...prevState.data,
      errors: flattenedErrors.fieldErrors,
    };
  }

  try {
    const result = await createShortUrl({ ...validatedSchema.data, userId });
    console.log("vamos con la nueva url", result);

    return {
      success: true,
      message: "Url registered",
      data: {
        ...result,
      },
    };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code == "P2002"
    ) {
      return {
        success: false,
        message: "Slug already registered.",
        ...prevState,
        errors: {
          slug: ["Slug ya registrado."],
        },
      };
    }
    throw error;
  }
}

export async function deleteUrlAction(urlId: number) {
  console.log("Borramos la URL", urlId);
  return deleteUrl(urlId);
}

export async function insertUserUrlAction() {}
