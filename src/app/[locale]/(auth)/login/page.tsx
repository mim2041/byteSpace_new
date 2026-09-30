"use client";

import { useState } from "react";
import { Link, useRouter } from "@/i18n/navigation";
import { toast } from "sonner";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { loginAction } from "./actions";

type FormData = { email: string; password: string };
type FormErrors = Partial<FormData>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address.";
  if (!data.password) errors.password = "Password is required.";
  return errors;
}

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    try {
      await loginAction(form);
      toast.success("Welcome back!");
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
        <div className="mb-7">
          <p className="mb-1 text-xs font-medium text-blue-600">Sign In</p>
          <h1 className="text-[2rem] font-bold leading-tight tracking-tight text-zinc-800">Welcome Back</h1>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <Input
            label="Email address"
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="designer@example.com"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="********"
          />

          <Button
            type="submit"
            fullWidth
            loading={loading}
            size="lg"
            className="bg-[#d4fb20] text-zinc-900 hover:bg-[#c4eb0e] active:bg-[#b4db00]"
          >
            Sign In
          </Button>
        </form>

        <div className="my-7 flex items-center gap-3 text-xs text-gray-400">
          <span className="h-px flex-1 bg-gray-200" />
          or
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="flex justify-center gap-3">
          <button type="button" aria-label="Continue with Facebook" className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 text-lg font-bold text-black transition-colors hover:bg-gray-50">
            f
          </button>
          <button type="button" aria-label="Continue with Google" className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 text-lg font-bold text-black transition-colors hover:bg-gray-50">
            G
          </button>
        </div>

        <p className="mt-12 text-center text-xs text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-brand-600 hover:text-brand-700">
            Create one
          </Link>
        </p>
    </div>
  );
}
