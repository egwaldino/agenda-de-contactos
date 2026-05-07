"use server";

import { prisma } from "@/lib/prisma-db";

export const sendCodeDB = async (phone: string) => {
  try {
    if (!phone) return;

    const code = Math.floor(1000 + Math.random() * 9000).toString();
    const codeExpiry = new Date(Date.now() + 10 * 60 * 1000);

    const user = await prisma.user.upsert({
      where: { phone },
      update: { code, codeExpiry },
      create: { phone, code, codeExpiry },
    });

    console.log(`Código para ${phone}: ${code}`);

    return { success: true, userId: user.id };
  } catch (error) {
    throw error;
  }
};
