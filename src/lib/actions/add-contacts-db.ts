"use server";

import { prisma } from "@/lib/prisma-db";
import { getUserId } from "../get-user-id";

type addContactProps = {
  name: string;
  email: string;
  phone: string;
};

export const addContactsDB = async (contactData: addContactProps) => {
  try {
    if (!contactData) return;

    const userId = await getUserId();

    const contact = await prisma.contact.create({
      data: {
        ...contactData,
        userId
      },
    });

    return contact;
  } catch (error) {
    throw error;
  }
};
