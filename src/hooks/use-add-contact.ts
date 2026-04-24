import { toast } from "sonner";
import { useState } from "react";
import { addContactsDB } from "@/lib/actions/add-contacts-db";
import { AddContactProps } from "@/types/AddContactProps";

export const useAddContact = ({handleGetContacts}: AddContactProps) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleAddContact = async () => {
    try {
      if (!form.name || !form.email || !form.phone) {
        toast.error("Preenche todos os campos");
        return;
      }

      const newContact = await addContactsDB({
        name: form.name,
        email: form.email,
        phone: form.phone,
      });

      if (!newContact) return;

      toast.success("Contacto adicionado com sucesso");
      setForm({ name: "", email: "", phone: "" });
      await handleGetContacts();
    } catch {
      toast.error("Falha ao adicionar novo contacto");
    }
  };

  return {
    form,
    setForm,
    handleAddContact,
  };
};
