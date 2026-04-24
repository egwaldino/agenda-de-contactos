import { Contact } from "@/generated/prisma/client";

export type GetContactProps = {
  contacts: Contact[];
  handleGetContacts: () => Promise<void>;
};
