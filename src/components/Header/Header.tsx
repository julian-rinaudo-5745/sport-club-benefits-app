"use client";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Link from "next/link";
import { SPORT_CLUB_LOGO } from "@/constants";

export const Header = () => {
  const [benefits] = useLocalStorage("benefits", []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 py-4">
          <Link href="/">
            <img
              alt="Logo"
              className="h-8 w-fit object-contain "
              src={SPORT_CLUB_LOGO}
            />
          </Link>
          <SearchBar items={benefits} />
        </div>
      </div>
    </header>
  );
};
