"use server";

import { guestUrlFormSchema } from "@/validations/url";

export async function insertUrl(
  prevState: { url: string },
  formdata: FormData,
) {
  const url = formdata.get("url") as string;

  const result = guestUrlFormSchema.safeParse({ url });

  // console.log(result);

  console.log("Guardamos la url en la base de datos");

  return { url };
}
