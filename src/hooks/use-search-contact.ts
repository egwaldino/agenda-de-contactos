import { useState, useEffect } from "react";
import { searchContactDB } from "@/lib/actions/search-contacts-db";
import { toast } from "sonner";

export function useSearchContact() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<[]>([]); // Define o tipo se usares TS
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.trim() === "") {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const data = await searchContactDB(query);
        setResults(data || []);
      } catch {
        toast.error("Erro ao pesquisar contactos");
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return { query, setQuery, results, isLoading };
}
