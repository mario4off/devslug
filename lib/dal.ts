import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { cache } from "react";
import "server-only";

export const verifySession = cache(async () => {
  const session = await auth();
  const user = session?.user;

  if (!user?.id) {
    redirect("/");
  }

  return { id: user.id, ...user };
});
