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
    return Response.redirect(new URL("/not-found", request.url));
  }

  if (isBot(userAgent)) {
    console.log("Es un bot");
    const urlMetadata = await getMetadataByUrl(url?.id);

    if (urlMetadata) {
      return new Response(generatePreview(urlMetadata), {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      });
    }
  }
  return Response.redirect(url.originalUrl, 302);
}
