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
import { Plus } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { Field, FieldGroup } from "@/components/ui/field";

import { useAddContact } from "@/hooks/use-add-contact";
import { AddContactProps } from "@/types/AddContactProps";

export const AddContact = ({ handleGetContacts }: AddContactProps) => {
  const { form, setForm, handleAddContact } = useAddContact({handleGetContacts});

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="cursor-pointer py-5 px-4 bg-transparent text-zinc-200 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-600"
          variant="outline"
        >
          <Plus />
          Novo
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Contacto</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para adicionar um novo contacto.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <Label htmlFor="name-1">Name</Label>
            <Input
              id="name-1"
              name="name"
              placeholder="Nome completo"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </Field>
          <Field>
            <Label htmlFor="email-1">Email</Label>
            <Input
              id="email-1"
              name="email"
              placeholder="Endereço de email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </Field>
          <Field>
            <Label htmlFor="phone-1">Phone</Label>
            <Input
              id="phone-1"
              name="phone"
              placeholder="Número de telefone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
              onClick={handleAddContact}
            >
              Adicionar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
