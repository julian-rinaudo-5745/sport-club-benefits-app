import { Search, X } from "lucide-react";
import { SearchResults } from "@/components/SearchBar/SearchResults";
import { Benefit } from "@/types";
import { useSearchBar } from "@/hooks/useSearchBar";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SearchBar({ items }: { items: Benefit[] }) {
  const { query, results, isResultsVisible, handleSearch, clearSearch } =
    useSearchBar(items);
  const path = usePathname();

  useEffect(() => {
    clearSearch();
  }, [path]);

  return (
    <div className="relative flex-1 max-w-2xl" data-testid="search-bar">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar beneficio"
          className="w-full px-4 py-2 pl-10 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      <SearchResults results={results} isVisible={isResultsVisible} />
    </div>
  );
}
