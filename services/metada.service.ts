import * as cheerio from "cheerio";
import prisma from "@/lib/db";

export async function extractMetaDataFromUrl(url: string) {
  const response = await fetch(url);

  console.log("STATUS:", response.status);
  console.log("OK:", response.ok);
  console.log("URL:", response.url);
  console.log("CONTENT-TYPE:", response.headers.get("content-type"));

  const html = await response.text();

  console.log("HTML LENGTH:", html.length);
  console.log("HTML START:", html.slice(0, 500));

  const $ = cheerio.load(html);

  const metadata = {
    title: $('meta[property="og:title"]').attr("content") ?? null,
    description: $('meta[name="description"]').attr("content") ?? null,
    image: $('meta[property="og:image"]').attr("content") ?? null,
    favicon: $('link[rel="icon"]').attr("href") ?? null,
  };

  console.log("estos son los metadata: ", metadata);
  return metadata;
}

export async function getMetadataByUrl(urlId: number) {
  return await prisma.urlMeta.findUnique({
    where: {
      urlId: urlId,
    },
  });
}
