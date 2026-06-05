export type UrlFormState = {
  success?: boolean;
  message?: string;
  data?: {
    url?: string | null;
    slug?: string;
    userId: string | null;
  };
  errors?: { url?: string[] };
};
