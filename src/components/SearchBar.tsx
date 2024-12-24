// export const SearchBar = () => {
//     return (
//         <div>
//             <input type="text" placeholder="Search..." />
//             <button>Search</button>
//         </div>
//     )
// }
"use client";
import Link from "next/link";
import { useState } from "react";

interface AutocompleteProps {
  suggestions: Suggestions[];
}

interface Suggestions {
  id: number;
  name: string;
}

export const SearchBar = ({ suggestions }: AutocompleteProps) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestions[]>(
    []
  );
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    // Filter suggestions based on input value
    const filteredSuggestions = suggestions.filter(({ name }) =>
      name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filteredSuggestions);
  };

  return (
    <div className="autocomplete-container">
      <input
        className="autocomplete-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type to search..."
      />
      {inputValue && (
        <ul className="autocomplete-suggestions">
          {filteredSuggestions?.map(({ id, name }, index) => (
            <Link
              key={index}
              href={{
                pathname: `/benefit/${id}`,
              }}
            >
              <li className="autocomplete-suggestion" />
              {name}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
