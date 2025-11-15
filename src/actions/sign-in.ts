"use server";

import { ActionState } from "@/actions/utils/types";
import { TypedFormData } from "@/lib/types";
import { SignInSchema, signInSchema } from "@/validations/sign-in";

export async function signIn(_: ActionState, payload: FormData): Promise<ActionState> {
  const formData = new TypedFormData<SignInSchema>(payload);

  const data: SignInSchema = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const parsed = signInSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  return { success: true, errors: [] };
}
