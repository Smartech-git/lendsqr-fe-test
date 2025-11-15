import * as z from "zod";

export const signInSchema = z
  .object({
    email: z.email("Please enter a valid email address"),
    password: z.string().trim().min(1, "Password is required"),
    admin_type: z.string().trim().optional(),
    identifier: z.string().trim().optional(),
    expectedRole: z.string().trim().optional(),
  })
  .strict();

export type SignInSchema = z.infer<typeof signInSchema>;
