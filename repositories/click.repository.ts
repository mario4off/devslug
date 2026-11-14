import prisma from "@/lib/db";
import { CreateClickInput } from "@/types/url";

export async function createClick(data: CreateClickInput) {
  return prisma.click.create({ data });
}
