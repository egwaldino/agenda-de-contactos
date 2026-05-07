"use client";

import { useState } from "react";
import { sendCodeDB } from "@/lib/actions/send-code-db";

export const useLogin = () => {
  const [phone, setPhone] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  const handleSendCode = async () => {
    if (!phone) return;

    await sendCodeDB(phone);
    setCodeSent(true);
  };

  return { phone, setPhone, codeSent, handleSendCode };
};
