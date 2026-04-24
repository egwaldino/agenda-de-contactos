import { deleteContactOnDB } from "@/lib/actions/delete-contacts-db";
import { ContactProps } from '@/types/contactProps';
import { toast } from "sonner";

export const useDeleteContact = ({ handleGetContacts}: ContactProps) => {

  const handleDeleteContact = async (id: string) => {
    try {
      const deletedContact = await deleteContactOnDB(id);

      if (!deletedContact) return;
      await handleGetContacts();
      toast.success("Contacto removido com sucesso");
    } catch {
      toast.error("Falha ao remover contacto da agenda");
    }
  };

  return {
    handleDeleteContact,
  };
};
