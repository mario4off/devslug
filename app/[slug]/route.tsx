import { isExpired, findUrlBySlug } from "@/services/url.service";
import { isBot } from "isbot";
import { getMetadataByUrl } from "@/repositories/metadata.repository";
import generatePreview from "@/lib/utils/generate-preview";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const userAgent = request.headers.get("user-agent");

  const result = await findUrlBySlug(slug);
  console.log(result);

  if (!result) {
    return Response.redirect(new URL(`/${slug}/not-found`, request.url));
  }

  const expired = isExpired(result);

  if (expired) {
    return Response.redirect(
      new URL(`/${slug}/not-found?reason=expired`, request.url),
    );
  }

  if (isBot(userAgent)) {
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
