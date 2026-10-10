import { Url } from "@/lib/generated/prisma/client";
import { isExpired } from "@/services/url.service";
import { describe, expect, it } from "vitest";

describe("isExpired", () => {
  it("returns true if the URL has more than 7 days", () => {
    const createdAt = new Date();
    createdAt.setDate(createdAt.getDate() - 8);

    const url = { createdAt } as Url;

    expect(isExpired(url)).toBe(true);
  });

  it("returns false if the URL has less than 7 days", () => {
    const createdAt = new Date();
    createdAt.setDate(createdAt.getDate() - 6);

    const url = { createdAt } as Url;

    expect(isExpired(url)).toBe(false);
  });
});
