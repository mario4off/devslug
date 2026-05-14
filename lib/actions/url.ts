"use server";

import { urlSchema } from "@/validations/urlSchema";

export async function insertUrl(formdata: FormData) {
  const url = formdata.get("url") as string;

  const result = urlSchema.safeParse({ url });

  console.log(result);

  console.log("Guardamos la url en la base de datos");
}
