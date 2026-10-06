export type UrlFormState = {
  success?: boolean;
  message?: string;
  data?: {
    url?: string | null;
    slug?: string | null;
  };
  errors?: { url?: string[]; slug?: string[] };
};
