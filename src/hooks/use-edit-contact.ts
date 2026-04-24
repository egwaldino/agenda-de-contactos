import { toast } from "sonner";
import { useState } from "react";
import { editContactsDB } from "@/lib/actions/edit-contacts-db";
import { ContactProps } from '@/types/contactProps';

export const useEditContact = ({contact, handleGetContacts}: ContactProps) => {
  const [editedContact, setEditedContact] = useState({
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
  });

  const updateField = (field: string, value: string) => {
    setEditedContact((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditedContact = async () => {
    try {
      await editContactsDB({ contactId: contact.id, newContact: editedContact });
      await handleGetContacts();
      toast.success("Contacto editado com sucesso!");
      return;
    } catch {
      toast.error("Falha ao editar o contacto.");
    }
  };

  return { editedContact, updateField, handleEditedContact };
};
