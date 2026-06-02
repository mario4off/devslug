import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db"; // ajusta según tu ruta real

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany({ take: 1 });
    return NextResponse.json({ success: true, users });
  } catch (err) {
    console.error("DB ERROR:", err);
    return NextResponse.json(
      { success: false, error: (err as any).message },
      { status: 500 },
    );
  }
}
