import prisma from "@/lib/db";

export async function createUrlMeta(data: CreateMetadataInpur) {
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
