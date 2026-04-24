"use client";

import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";

import { ContactProps } from "@/types/contactProps";
import { useDeleteContact } from "@/hooks/use-delete-contact";

export const DeleteContact = ({ contact, handleGetContacts }: ContactProps) => {
  const { handleDeleteContact } = useDeleteContact({
    contact,
    handleGetContacts,
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="cursor-pointer hover:bg-white py-5 rounded-md px-4 bg-transparent text-zinc-200 hover:text-zinc-200 border border-zinc-600"
          variant="outline"
        >
          <Trash className="text-red-400" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza que pretende apagar?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação é irreversível. Isso pode apagar o contacto de forma
            permanente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 text-white cursor-pointer"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Apagar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
