import prisma from "@/lib/db";
import { CreateMetadataInput } from "@/types/url";

export async function createUrlMeta(data: CreateMetadataInput) {
  return await prisma.urlMeta.create({
    data: {
      ...data,
    },
  });
}

export async function getMetadataByUrl(urlId: number) {
  return await prisma.urlMeta.findUnique({
    where: {
      urlId: urlId,
    },
  });
}
