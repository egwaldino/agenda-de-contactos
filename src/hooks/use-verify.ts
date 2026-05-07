"use client";

import { useState } from "react";
import { verifyCodeDB } from "@/lib/actions/verify-code-db";

type UseVerifyProps = {
  phone: string;
  onSuccess: () => void;
};

export const useVerify = ({ phone, onSuccess }: UseVerifyProps) => {
  const [code, setCode] = useState("");

  const handleVerifyCode = async () => {
    if (!code) return;

    const result = await verifyCodeDB(phone, code);

   if (result?.success && result.token) {
     document.cookie = `token=${result.token}; path=/; max-age=${7 * 24 * 60 * 60};`;
     onSuccess();
   }
  };

  return { code, setCode, handleVerifyCode };
};
