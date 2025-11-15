import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn, DefaultValues, FieldValues } from "react-hook-form";
import * as z from "zod";

/**
 * A custom hook that combines React Hook Form with Zod schema validation
 * @param formSchema - The Zod schema to validate the form against
 * @param defaultValues - Optional default values for the form fields
 * @returns A React Hook Form instance with Zod validation
 */
function useReactHookForm<T extends z.ZodObject<z.ZodRawShape>>(formSchema: T, defaultValues?: DefaultValues<z.infer<T>>): UseFormReturn<z.infer<T>>;

function useReactHookForm<T extends z.ZodType<FieldValues>>(formSchema: T, defaultValues?: DefaultValues<z.infer<T>>): UseFormReturn<z.infer<T>>;

function useReactHookForm<T extends z.ZodType<FieldValues>>(formSchema: T, defaultValues?: DefaultValues<z.infer<T>>) {
  return useForm<z.infer<T>>({
    defaultValues,
    reValidateMode: "onChange",
    resolver: zodResolver(formSchema as any),
  });
}

export default useReactHookForm;
