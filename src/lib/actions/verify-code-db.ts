"use server";

import { toast } from "sonner";
import { prisma } from "@/lib/prisma-db";
import jwt from "jsonwebtoken";

export const verifyCodeDB = async (phone: string, code: string) => {
  try {
    if (!phone || !code) return;

    const user = await prisma.user.findUnique({
      where: { phone },
    });

    if (!user) {
      toast.error("Utilizador não encontrado");
      return { success: false };
    }
    if (user.code !== code) {
      toast.error("Código inválido");
      return { success: false };
    }
    if (!user.codeExpiry || user.codeExpiry < new Date()) {
      toast.error("Código expirado");
      return { success: false };
    }

    await prisma.user.update({
      where: { phone },
      data: { code: null, codeExpiry: null },
    });

    const token = jwt.sign(
      { userId: user.id, phone: user.phone },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" },
    );

    return { success: true, token };
  } catch (error) {
    console.error("Error verifying code:", error);
    toast.error("Erro ao verificar código");
    return { success: false };
  }
};
