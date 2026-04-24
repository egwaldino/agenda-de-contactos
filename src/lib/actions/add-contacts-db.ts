"use server";

import { prisma } from "@/lib/prisma-db";

type addContactProps = {
  name: string;
  email: string;
  phone: string;
};

export const addContactsDB = async (contactData: addContactProps) => {
  try {
    if (!contactData) return;

    const contact = await prisma.contact.create({
      data: contactData,
    });

    return contact;
  } catch (error) {
    throw error;
  }
};
