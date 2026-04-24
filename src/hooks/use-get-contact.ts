import { useEffect, useState } from "react";
import { Contact } from "@/generated/prisma/client";
import { getContacts } from "@/lib/actions/get-contacts-db";

export const useGetContact = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleGetContacts = async () => {
    try {
      const contacts = await getContacts();

      if (!contacts) return;

      setContacts(contacts);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleGetContacts();
  }, []);

  return {
    contacts,
    handleGetContacts,
  };
};
