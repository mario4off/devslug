import prisma from "@/lib/db";
import { generateSlug } from "@/lib/utils/url";
import { extractMetaDataFromUrl } from "./metada.service";
import { Url } from "@/lib/generated/prisma/client";
import { createUrl } from "@/repositories/url.repository";
import { createUrlMeta } from "@/repositories/metadata.repository";

export async function findUrlBySlug(slug: string) {
  return await prisma.url.findFirst({ where: { slug: slug } });
}

export async function createShortUrl(originalUrl: string) {
  const slug = generateSlug();

  const url = await createUrl(originalUrl, slug);

  const metadata = await extractMetaDataFromUrl(originalUrl);

  console.log("estos son los metadata2: ", metadata);

  const result = await createUrlMeta({ urlId: url.id, ...metadata });

  console.log("resultado: ", result);

  return url;
}

export function isExpired(url: Url): boolean {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  return url.createdAt < sevenDaysAgo;
}
