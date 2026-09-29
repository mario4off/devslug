export type UrlFormState = {
  success?: boolean;
  message?: string;
  data?: {
    url?: string | null;
    slug?: string;
  };
  errors?: { url?: string[]; slug?: string[] };
};
