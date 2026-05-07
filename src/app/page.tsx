"use client";

import { AddContact } from "@/components/contacts/add-contact";
import { GetContact } from "@/components/contacts/get-contact";
import { SearchContact } from "@/components/contacts/search-contact";
import { Button } from "@/components/ui/button";
import { useGetContact } from "@/hooks/use-get-contact";
import { useLogout } from "@/hooks/use-logout";
import { useSearchContact } from "@/hooks/use-search-contact";
import { LogOut } from "lucide-react";

export default function Home() {
  const { contacts, handleGetContacts } = useGetContact();
  const { query, setQuery, results, isLoading } = useSearchContact();
  const { handleLogout } = useLogout();

  const displayContacts = query.trim().length > 0 ? results : contacts;

  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-900 font-sans dark:bg-black min-h-screen">
      <div className="w-145 flex flex-col items-center gap-6">
        <div className="w-full flex justify-between items-center">
          <p className="text-zinc-200 text-xl font-semibold">
            Agenda de Contactos
          </p>
          <div className="flex gap-5">
            <AddContact handleGetContacts={handleGetContacts} />
            <Button
              className="cursor-pointer py-5 px-4 bg-transparent text-zinc-200 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-600"
              variant="outline"
              onClick={handleLogout}
            >
              <LogOut />
            </Button>
          </div>
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
