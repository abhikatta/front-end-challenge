"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup } from "@/components/ui/input-group";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import authBgImage from "@/public/auth-bg.png";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const loginSchema = z.object({
  email: z.email({ error: "This is required" }),
  password: z
    .string()
    .min(6, { error: "Password should have atleast 6 characters" })
    .max(12, { error: "Password should be under 12 characters" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const router = useRouter();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginSchema) {
    console.log(values);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (res.ok) {
        router.replace("/");
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="flex flex-row items-center justify-between w-full h-full">
      <div className="flex items-center justify-center flex-1 h-full">
        <div className="w-full   flex flex-col items-center space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-semibold">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">Sign Up For Free</p>
          </div>

          <form
            id="form-rhf-demo"
            className="w-md"
            onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-email">
                      Email*
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Email"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-password">
                      Password
                    </FieldLabel>
                    <InputGroup>
                      <Input
                        {...field}
                        type="password"
                        id="form-rhf-demo-password"
                        placeholder="Password"
                        aria-invalid={fieldState.invalid}
                      />
                    </InputGroup>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <Button className="w-full mt-4" type="submit">
              Submit
            </Button>
          </form>

          <span className="text-center text-sm text-muted-foreground">OR</span>

          <div className="space-y-3">
            <Button variant="outline" className="w-full">
              Sign in with Google
            </Button>

            <Button variant="outline" className="w-full">
              Sign in with Facebook
            </Button>
          </div>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link href={"/signup"} className="text-primary cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="h-full max-w-1/2 bg-blue-400">
        <Image
          src={authBgImage}
          alt="background"
          className="h-full  object-cover"
        />
      </div>
    </div>
  );
};
