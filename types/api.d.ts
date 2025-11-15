interface FetcherOptions {
  method?: "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "purge" | "PURGE" | "link" | "LINK" | "unlink" | "UNLINK";
  data?: any;
  customHeaders?: HeadersInit;
  useAuthBaseUrl?: boolean;
  fetchOptions?: RequestInit;
  useAuth?: boolean;
  retry?: number;
  delay?: number;
  cookiesKey?: CookiesKey;
  axiosConfig?: any;
}

interface FetchFunction {
  (url: string, options: FetcherOptions);
}

type Code = "400" | "401" | "403" | "404" | "422" | "500" | undefined;

type AuthError = {
  code?: string | null;
  message?: string;
  errors?: string[];
};
