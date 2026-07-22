import prisma from "@/lib/db";
import { generateSlug } from "@/lib/utils/url";
import { extractMetaDataFromUrl } from "./metada.service";

export async function findUrlBySlug(slug: string) {
  return await prisma.url.findFirst({ where: { slug: slug } });
}

export async function createShortUrl(originalUrl: string) {
  const slug = generateSlug();

  const url = await prisma.url.create({
    data: {
      slug: slug,
      originalUrl: originalUrl,
    },
  });

  const metadata = await extractMetaDataFromUrl(originalUrl);

  const result = await prisma.urlMeta.create({
    data: {
      urlId: url.id,
      ...metadata,
    },
  });

  return url;
}
