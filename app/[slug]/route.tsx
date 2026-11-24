import { isExpired } from "@/services/url.service";
import { findUrlBySlug } from "@/repositories/url.repository";
import { getMetadataByUrl } from "@/repositories/metadata.repository";
import generatePreview from "@/lib/utils/generate-preview";
import { userAgent } from "next/server";
import { CreateClickInput } from "@/types/url";
import { createClick } from "@/repositories/click.repository";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const agent = userAgent(request);
  const referer = request.headers.get("referer");
  console.log(referer);

  const result = await findUrlBySlug(slug);
  console.log(result);

  console.log("vamos a ello!!!");
  if (!result) {
    return Response.redirect(new URL(`/${slug}/not-found`, request.url));
  }

  const expired = isExpired(result);

  if (expired && !result.userId) {
    return Response.redirect(new URL(`/${slug}/expired`, request.url));
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

  try {
    await createClick({
      urlId: result.id,
      device: agent?.device.type ?? "desktop",
      browser: agent.browser.name ?? null,
    });
  } catch (error) {
    console.log("Error al registrar el click", error);
  }

  return Response.redirect(result.originalUrl, 302);
}
