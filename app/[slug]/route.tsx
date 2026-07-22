import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { findUrlBySlug } from "@/services/url.service";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const url = await findUrlBySlug(slug);

  console.log(url);

  if (!url) {
    redirect("https://sport.es");
  }

  redirect(url.originalUrl);
}
