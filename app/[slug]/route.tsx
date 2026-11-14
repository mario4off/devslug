import { isExpired } from "@/services/url.service";
import { findUrlBySlug } from "@/repositories/url.repository";
import { getMetadataByUrl } from "@/repositories/metadata.repository";
import generatePreview from "@/lib/utils/generate-preview";
import { userAgent } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const agent = userAgent(request);
  console.log(request.headers);

  const result = await findUrlBySlug(slug);
  console.log(result);

  if (!result) {
    return Response.redirect(new URL(`/${slug}/not-found`, request.url));
  }

  const expired = isExpired(result);

  if (expired && !result.userId) {
    return Response.redirect(
      new URL(`/${slug}/not-found?reason=expired`, request.url),
    );
  }

  if (agent.isBot) {
    console.log("Es un bot");
    const urlMetadata = await getMetadataByUrl(result?.id);

    if (urlMetadata) {
      return new Response(generatePreview(urlMetadata), {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      });
    }
  }
  return Response.redirect(result.originalUrl, 302);
}
