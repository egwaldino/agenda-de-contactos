"use server";
import { prisma } from "../prisma-db";

export async function searchContactDB(name: string) {
  if (!name || name.trim() === "") return [];

  try {
    const results = await prisma.contact.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
      take: 10,
    });

    return JSON.parse(JSON.stringify(results));
  } catch (error) {
    console.error("Erro na base de dados:", error);
    throw new Error("Falha ao procurar contactos");
  }
}
