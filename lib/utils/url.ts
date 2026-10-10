import { nanoid } from "nanoid";

export function generateSlug(): string {
  return nanoid(5);
}

export function normalizeSlugInput(value: string) {
  return value
    .replace(/\s/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+/, "");
}
