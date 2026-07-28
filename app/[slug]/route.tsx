import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { findUrlBySlug } from "@/services/url.service";
import { isBot } from "isbot";
import { getMetadataByUrl } from "@/services/metada.service";
import generatePreview from "@/lib/utils/generate-preview";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const userAgent = request.headers.get("user-agent");

  const url = await findUrlBySlug(slug);
  console.log(url);

  if (!url) {
    redirect("https://sport.es");
  }

  if (isBot(userAgent)) {
    console.log("Es un bot");
    const urlMetadata = await getMetadataByUrl(url?.id);

    if (urlMetadata) {
      return new Response(generatePreview(urlMetadata), {
        status: 200,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
      });
    }
  }
  return Response.redirect(url.originalUrl, 302);
}
