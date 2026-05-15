"use client";

import { useRouter } from "next/navigation";
import { SignupForm } from "@/components/auth/signup-form";

export default function SignupPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-[#F7F7F7] font-sans dark:bg-black min-h-screen">
      <SignupForm onSuccess={() => router.push("/")} />
    </main>
  );
}
