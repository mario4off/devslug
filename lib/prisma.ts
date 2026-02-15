import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

async function testConnection() {
  try {
    const users = await prisma.user.findMany({ take: 1 }); // query de prueba
    console.log("✅ DB OK", users);
  } catch (err) {
    console.error("❌ DB ERROR", err);
  }
}

export default prisma;
