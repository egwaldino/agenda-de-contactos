"use client";

import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-900 font-sans dark:bg-black min-h-screen">
      <LoginForm onSuccess={() => router.push("/")} />
    </main>
  );
}
