import prisma from "@/lib/db";

export async function createUrl(originalUrl: string, slug: string) {
  return await prisma.url.create({
    data: {
      slug: slug,
      originalUrl: originalUrl,
    },
  });
}

export async function getUrlsByUserId(userId: string) {
  return await prisma.url.findMany({
    where: { userId },
  });
}
