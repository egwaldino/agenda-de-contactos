"use server";

import { prisma } from "@/lib/prisma-db";

export const getContacts = async () => {
  try {
    const contacts = await prisma.contact.findMany({});

    if (!contacts) return;

    return contacts;
  } catch (error) {
    throw error;
  }
};
