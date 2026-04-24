interface SearchProps {
  value: string;
  onChange: (val: string) => void;
}

export function SearchContact({ value, onChange }: SearchProps) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Pesquisar por nome..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-md text-zinc-500 p-3 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-700"
      />
    </div>
  );
}
