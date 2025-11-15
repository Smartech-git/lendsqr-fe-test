import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * @template T - The type of the input object, where keys are strings and values are stringifiable.
 * @param data - The object to convert into FormData.
 * @returns A FormData instance containing the key-value pairs from the input object.
 */
export const createFormData = <T extends Record<string, string | number | Date | boolean | null | undefined>>(data: T): FormData => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      formData.append(key, String(value));
    }
  });

  return formData;
};
