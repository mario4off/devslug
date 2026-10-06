import { nanoid } from "nanoid";

export function generateSlug(): string {
  return nanoid(5);
}

export function normalizeSlugInput(value: string) {
  return value.replace(/\s+/g, "-");
}
