import { Contact } from "@/generated/prisma/client";

export type ContactProps = {
  contact: Contact;
  handleGetContacts: () => Promise<void>;
};

