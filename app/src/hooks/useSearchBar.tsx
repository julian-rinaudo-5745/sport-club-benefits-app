import { useState } from "react";
import { Benefit } from "@/types";

export function useSearchBar(items: Benefit[] = []) {
  const [query, setQuery] = useState("");
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const [results, setResults] = useState<Benefit[]>(items);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 0) {
      const filtered = items?.filter((result) =>
        result.brand_name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered ?? []);
      setIsResultsVisible(true);
    } else {
      setResults([]);
      setIsResultsVisible(false);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsResultsVisible(false);
  };

  return {
    query,
    results,
    isResultsVisible,
    handleSearch,
    clearSearch,
  };
}
