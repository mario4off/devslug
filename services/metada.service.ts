import { log } from "console";
import * as cheerio from "cheerio";
import { Url } from "@/lib/generated/prisma/client";
import prisma from "@/lib/db";

export async function extractMetaDataFromUrl(url: string) {
  const html = await fetch(url).then((r) => r.text());

  const $ = cheerio.load(html);

  const metadata = {
    title: $('meta[property="og:title"]').attr("content") ?? null,
    description: $('meta[name="description"]').attr("content") ?? null,
    image: $('meta[property="og:image"]').attr("content") ?? null,
    favicon: $('link[rel="icon"]').attr("href") ?? null,
  };

  return metadata;
}
