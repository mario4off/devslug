import prisma from "@/lib/db/db";

export async function findUrlBySlug(slug: string) {
  return await prisma.url.findFirst({ where: { slug: slug } });
}
