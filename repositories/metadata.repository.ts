// const result = await prisma.urlMeta.create({
//   data: {
//     urlId: url.id,
//     ...metadata,
//   },
// });

import prisma from "@/lib/db";

export async function createUrlMeta(data: CreateMetadataInpur) {
  return await prisma.urlMeta.create({
    data: {
      ...data,
    },
  });
}
