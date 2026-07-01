import prisma from "@/lib/db";

export async function findUrlBySlug(slug: string) {
  return await prisma.url.findFirst({ where: { slug: slug } });
}
