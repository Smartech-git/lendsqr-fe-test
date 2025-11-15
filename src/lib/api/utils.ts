export const baseUrl = process.env.BASE_URL;
export const baseUrl2 = process.env.BASE_URL;

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const extractErrorMessages = (errorData: any): Array<string> => {
  if (typeof errorData === "object" && Array.isArray(errorData.errors)) {
    const messages = errorData.errors.map((error: any) => error.msg);
    return messages;
  } else {
    return [];
  }
};
