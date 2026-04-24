"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { DeleteContact } from "./delete-contact";
import { GetContactProps } from "@/types/GetContactProps";
import { EditContact } from "@/components/contacts/edit-contact";

export const GetContact = ({ contacts, handleGetContacts}: GetContactProps) => {
  return (
    <>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="w-full flex justify-between items-center gap-4 py-4 px-6 bg-zinc-800 rounded-lg border border-zinc-600"
        >
          <Avatar className="w-14 h-14">
            <AvatarFallback>
              {contact.name
                .split(" ")
                .map((n) => n.charAt(0))
                .join("")
                .slice(0, 2)
                .toUpperCase()}{" "}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <p className="text-zinc-200 text-md font-medium">{contact.name}</p>
            <div className="flex items-center gap-1">
              <p className="text-zinc-500 text-sm">{contact.phone}</p>
              <p className="text-zinc-500 text-sm"> · {contact.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <EditContact
              contact={contact}
              handleGetContacts={handleGetContacts}
            />

            <DeleteContact
              contact={contact}
              handleGetContacts={handleGetContacts}
            />
          </div>
        </div>
      ))}
    </>
  );
};
