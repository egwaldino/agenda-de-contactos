"use server"

import { prisma } from "@/lib/prisma-db"

type EditContactsProps = {
    contactId: string;
    newContact: {
        name: string,
        email: string,
        phone: string,
    };
}

export const editContactsDB = async ({contactId, newContact}: EditContactsProps) => {
    try { 
        if (!contactId || !newContact) return 
        
        const editedContact = await prisma.contact.update({
          where: {
            id: contactId,
          },
          data: {
            name: newContact.name,
            email: newContact.email,
            phone: newContact.phone,
          },
        });

       return editedContact
    } catch (error) {
        throw error
    }
}