"use client";

import { useState } from "react";
import { sendCodeDB } from "@/lib/actions/send-code-db";
import { toast } from "sonner";

export const useLogin = () => {
  const [phone, setPhone] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  const handleInConstruction = () => {
    toast.error("Funcionalidade em construção!");
  };

  const handleSendCode = async () => {
    if (!phone) return;

    await sendCodeDB(phone);
    setCodeSent(true);
  };

  return { phone, setPhone, codeSent, handleSendCode, handleInConstruction };
};
