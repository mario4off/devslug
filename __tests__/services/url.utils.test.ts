import { normalizeSlugInput } from "@/lib/utils/url";
import { describe, expect, it } from "vitest";

describe("normalizeSlugInput", () => {
  it("turns spaces into hyphen", () => {
    expect(normalizeSlugInput("mi slug")).toBe("mi-slug");
  });

  it("remove not allowed characters", () => {
    expect(normalizeSlugInput("hola! mundo?")).toBe("hola-mundo");
  });

  it("avoid repetitive hyphens", () => {
    expect(normalizeSlugInput("mi---slug")).toBe("mi-slug");
  });

  it("erase hyphens at the beginning", () => {
    expect(normalizeSlugInput("---mi-slug")).toBe("mi-slug");
  });

  it("combined rules", () => {
    expect(normalizeSlugInput("  Mi slug!!! genial  ")).toBe("Mi-slug-genial-");
  });
});
