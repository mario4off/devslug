import prisma from "@/lib/db";
import { generateSlug } from "@/lib/utils/url";
import { extractMetaDataFromUrl } from "./metada.service";
import { Url } from "@/lib/generated/prisma/client";
import { createUrl } from "@/repositories/url.repository";
import { createUrlMeta } from "@/repositories/metadata.repository";
import { CreateShortUrlInput } from "@/types/url";

export async function createShortUrl({
  url,
  slug,
  userId,
}: CreateShortUrlInput) {
  if (!slug) {
    slug = generateSlug();
  }

  const createdUrl = await createUrl(url, slug);

  const metadata = await extractMetaDataFromUrl(createdUrl.originalUrl);

  console.log("estos son los metadata2: ", metadata);

  const result = await createUrlMeta({ urlId: createdUrl.id, ...metadata });

  console.log("resultado: ", result);

  return createdUrl;
}

export function isExpired(url: Url): boolean {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  return url.createdAt < sevenDaysAgo;
}
