import { Click } from "@/lib/generated/prisma/client";

export type CreateShortUrlInput = {
  url: string;
  slug?: string;
  userId: string | null;
};

export type CreateMetadataInput = {
  urlId: number;
  title: string | null;
  description: string | null;
  image: string | null;
  favicon: string | null;
};

export type CreateClickInput = Pick<Click, "urlId" | "device" | "browser">;
