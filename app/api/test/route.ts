// pages/api/test-db.ts
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma"; // ajusta la ruta a tu prisma

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // Query de prueba a la tabla users
    const users = await prisma.user.findMany({ take: 1 });
    res.status(200).json({ success: true, users });
  } catch (err) {
    console.error("DB ERROR:", err);
    res.status(500).json({ success: false, error: (err as any).message });
  }
}
