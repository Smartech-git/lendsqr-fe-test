"use client";

import { useRouter } from "next/navigation";
import React, { startTransition, useActionState, useEffect, useState } from "react";

import { signIn } from "@/actions/sign-in";
import { ActionState } from "@/actions/utils/types";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import useReactHookForm from "@/hooks/use-hooks-form";
import { createFormData } from "@/lib/utils";
import { signInSchema } from "@/validations/sign-in";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useReactHookForm(signInSchema, {
    email: "",
    password: "",
  });

  const email = watch("email");
  const password = watch("password");
  const isFormEmpty = !email?.trim() || !password?.trim();

  const [state, action, isPending] = useActionState<ActionState, FormData>(signIn, {
    success: false,
    errors: [],
    issues: [],
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(async (data) => {
      const formData = createFormData(data);
      startTransition(() => action(formData));
    })(e);
  };

  useEffect(() => {
    if (state.success) {
      router.replace("/app/dashboard");
    }
  }, [state.success]);

  return (
    <form className='auth-form' onSubmit={onSubmit}>
      <Input label='Email' type='email' placeholder={`Email`} {...register("email")} error={errors.email?.message} isInvalid={!!errors.email} disabled={isPending} />
      <Input
        label='Password'
        type={showPassword ? "text" : "password"}
        placeholder={`Password`}
        {...register("password")}
        error={errors.password?.message}
        isInvalid={!!errors.password}
        disabled={isPending}
        endContent={
          <Button type='button' className='uppercase password-end-content' variant='flat' onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? "Hide" : "Show"}
          </Button>
        }
      />
      <Button className='uppercase forgot-password' variant='link' disabled={isPending}>
        Forgot password?
      </Button>
      <Button type='submit' className='uppercase submit' isLoading={isPending} disabled={isPending || isFormEmpty}>
        Log in
      </Button>
    </form>
  );
}
