"use server";

import axios, { AxiosError, isAxiosError } from "axios";

import { baseUrl, baseUrl2, sleep } from "@/lib/api/utils";
import { getCookies } from "@/lib/cookies/";

export interface BaseResponse {
  success: boolean;
  message: any;
  code?: Code;
}

export const request = async <T = BaseResponse>(url: string, options: Omit<FetcherOptions, "axiosConfig">): Promise<T> => {
  const { method = "GET", data = null, customHeaders = {}, useAuthBaseUrl = false, fetchOptions = {}, useAuth = false, retry = 3, delay = 3000, cookiesKey = "Lendsqr-key" } = options;

  const headers: Record<string, any> = {
    "Content-Type": "application/json",
    ...customHeaders,
  };

  if (useAuth) {
    const data = await getCookies(cookiesKey);
    if (data?.cookie.token) {
      headers.Authorization = `Bearer ${data.cookie.token}`;
    }
  }

  const controller = new AbortController();
  const requestOptions: RequestInit = {
    method,
    headers,
    signal: controller.signal,
    ...fetchOptions,
  };

  if (data && method !== "GET") {
    requestOptions.body = JSON.stringify(data);
  }

  const baseURL = useAuthBaseUrl ? baseUrl2 : baseUrl;
  const fullUrl = `${baseURL}${url}`;
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  let attempts = 0;
  let lastError: Error;

  while (attempts <= retry) {
    try {
      const response = await fetch(fullUrl, requestOptions);
      clearTimeout(timeoutId);

      // console.log("request", response);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        return {
          message: errorData?.message || "Something went wrong",
          success: false,
        } as T;
      }
      return await response.json();
    } catch (error: any) {
      lastError = error as Error;
      attempts++;

      const isNetworkError = error instanceof TypeError || error.message.includes("fetch") || error.message.includes("aborted");
      const isServerError = "cause" in error && typeof error.cause === "object" && "status" in error.cause && Number(error.cause.status) >= 500 && Number(error.cause.status) <= 599;

      if (attempts > retry || (!isNetworkError && !isServerError)) {
        console.error(lastError);
        return {
          message: "Network error. Check your network connection, and try again.",
          success: false,
        } as T;
      }

      console.warn(`Retrying ${url} (${retry - attempts + 1} attempts left): ${lastError.message}`);
      await sleep(delay * Math.pow(2, attempts - 1));
    }
  }

  console.error("Request failed after multiple retries:", lastError!);

  return {
    message: "Something went wrong, please try again.",
    success: false,
  } as T;
};

export const axiosRequest = async <T = BaseResponse>(url: string, options: FetcherOptions = {}): Promise<T> => {
  const { method = "GET", data = null, customHeaders = {}, useAuthBaseUrl = false, axiosConfig = {}, useAuth = false, retry = 3, delay = 3000, cookiesKey = "Lendsqr-key" } = options;

  const headers: Record<string, any> = {
    ...(data instanceof FormData ? {} : { "Content-Type": "application/json" }),
    ...customHeaders,
  };

  if (useAuth) {
    const cookieData = await getCookies(cookiesKey);
    if (cookieData?.cookie.token) {
      headers.Authorization = `Bearer ${cookieData.cookie.token}`;
    }
  }

  const baseURL = useAuthBaseUrl ? baseUrl2 : baseUrl;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  const axiosInstance = axios.create({
    baseURL,
    headers,
    ...axiosConfig,
    signal: controller.signal,
  });

  let attempts = 0;
  let lastError: AxiosError | Error;

  while (attempts <= retry) {
    try {
      const response = await axiosInstance.request({
        url,
        method,
        data: method !== "GET" ? data : undefined,
        headers,
        ...axiosConfig,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      // console.log("axiosRequest", response);

      return response.data as T;
    } catch (error) {
      lastError = error as AxiosError;
      attempts++;

      const isAborted = axios.isCancel(lastError) || (lastError instanceof Error && lastError.message.includes("canceled"));

      const isNetworkError = !isAxiosError(lastError) || (isAxiosError(lastError) && (lastError.code === "ECONNABORTED" || lastError.code === "ERR_NETWORK" || isAborted));
      const isServerError = isAxiosError(lastError) && (lastError.response?.status as any) >= 500 && (lastError.response?.status as any) <= 599;

      if (attempts > retry || (!isNetworkError && !isServerError)) {
        console.error("Axios request error:", lastError);
        let errorMessage = "Something went wrong";
        if (isAborted) {
          errorMessage = "Request timed out or was aborted.";
        } else if (isNetworkError) {
          errorMessage = "Network error. Check your network connection, and try again.";
        } else if (isAxiosError(lastError) && lastError.response?.data?.message) {
          errorMessage = lastError.response.data.message;
        } else if (lastError.message) {
          errorMessage = lastError.message;
        }

        return {
          message: errorMessage,
          success: false,
        } as T;
      }

      console.warn(`Retrying ${url} (${retry - attempts + 1} attempts left): ${lastError.message}`);
      await sleep(delay * Math.pow(2, attempts - 1));
    }
  }

  console.error("Axios request failed after multiple retries:", lastError!);
  return {
    message: "Something went wrong, please try again.",
    success: false,
  } as T;
};
