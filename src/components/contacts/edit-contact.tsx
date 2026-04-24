"use client";

import {
  Dialog,
  DialogClose,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SquarePen } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Field, FieldGroup } from "@/components/ui/field";
import { useEditContact } from "@/hooks/use-edit-contact";
import { ContactProps } from "@/types/contactProps";

export const EditContact = ({
  contact,
  handleGetContacts,
}: ContactProps) => {
  const { editedContact, updateField, handleEditedContact } = useEditContact({ contact, handleGetContacts });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="cursor-pointer hover:text-zinc-200 hover:bg-zinc-800 py-5 rounded-md px-4 bg-transparent text-zinc-200 border border-zinc-600"
          variant="outline"
        >
          <SquarePen />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Contacto</DialogTitle>
          <DialogDescription>
            Editando esse contacto, as informações serão atualizadas após clicar
            em guardar.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <Label htmlFor="name-1">Name</Label>
            <Input
              id="name-1"
              name="name"
              placeholder="Nome completo"
              value={editedContact.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
          </Field>
          <Field>
            <Label htmlFor="email-1">Email</Label>
            <Input
              id="email-1"
              name="email"
              placeholder="Endereço de email"
              value={editedContact.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </Field>
          <Field>
            <Label htmlFor="phone-1">Phone</Label>
            <Input
              id="phone-1"
              name="phone"
              placeholder="Número de telefone"
              value={editedContact.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="rounded-md cursor-pointer bg-red-500 text-white"
              type="submit"
            >
              Cancelar
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              className="rounded-md cursor-pointer bg-zinc-800 text-white"
              type="submit"
              onClick={handleEditedContact}
            >
              Guardar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
