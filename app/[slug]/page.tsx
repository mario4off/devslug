import { notFound, redirect } from "next/navigation";
import { findUrlBySlug } from "@/services/url.service";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const url = await findUrlBySlug(slug);

  if (!url) {
    notFound();
  }

  redirect(url.originalUrl);
}
