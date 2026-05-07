"use client";

import { useState } from "react";
import { LoginForm } from "@/components/auth/login-form";
import { AddContact } from "@/components/contacts/add-contact";
import { GetContact } from "@/components/contacts/get-contact";
import { SearchContact } from "@/components/contacts/search-contact";
import { useGetContact } from "@/hooks/use-get-contact";
import { useSearchContact } from "@/hooks/use-search-contact";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { contacts, handleGetContacts } = useGetContact();
  const { query, setQuery, results, isLoading } = useSearchContact();

  const displayContacts = query.trim().length > 0 ? results : contacts;

 if (!isAuthenticated) {
   return (
     <main className="flex flex-col flex-1 items-center justify-center bg-zinc-900 font-sans dark:bg-black min-h-screen">
       <LoginForm onSuccess={() => setIsAuthenticated(true)} />
     </main>
   );
 }

  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-900 font-sans dark:bg-black min-h-screen">
      <div className="w-145 flex flex-col items-center gap-6">
        <div className="w-full flex justify-between items-center">
          <p className="text-zinc-200 text-xl font-semibold">
            Agenda de Contactos
          </p>
          <AddContact handleGetContacts={handleGetContacts} />
        </div>

        <SearchContact value={query} onChange={setQuery} />

        <>
          {isLoading ? (
            <p className="text-zinc-400 text-center text-sm">A pesquisar...</p>
          ) : (
            <GetContact
              contacts={displayContacts}
              handleGetContacts={handleGetContacts}
            />
          )}
        </>
      </div>
    </main>
  );
}
