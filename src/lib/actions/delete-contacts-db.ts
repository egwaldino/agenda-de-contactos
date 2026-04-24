"use server"

import { prisma } from "@/lib/prisma-db"

export const deleteContactOnDB = async (idContact: string) => {
    try {
        if (!idContact) return 

        const deletedContact = await prisma.contact.delete({
          where: {
            id: idContact,
          },
        });

        if (!deletedContact) return
        
        return deletedContact
    } catch (error) {
        throw error
    }
}