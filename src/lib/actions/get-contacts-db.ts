"use server";

import { prisma } from "@/lib/prisma-db";
import { getUserId } from "../get-user-id";

export const getContacts = async () => {
  try {
    const userId = await getUserId()

    const contacts = await prisma.contact.findMany({
      where: {
        userId
      }
    });

    if (!contacts) return;

    return contacts;
  } catch (error) {
    throw error;
  }
};
