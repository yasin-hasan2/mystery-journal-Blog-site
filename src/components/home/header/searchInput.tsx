"use client";
import { searchAction } from "@/actions/search";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const params = useSearchParams();
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <form action={searchAction}>
      {/* Desktop Search (always visible on lg+) */}
      <div className="hidden lg:block relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          name="search"
          defaultValue={params.get("search") || ""}
          placeholder="Search articles..."
          className="pl-10 w-56 focus-visible:ring-1"
        />
      </div>

      {/* Mobile Search (icon toggle) */}
      <div className="lg:hidden">
        {isMobileSearchOpen ? (
          <div className="relative flex items-center gap-2">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              autoFocus
              type="search"
              name="search"
              defaultValue={params.get("search") || ""}
              placeholder="Search articles..."
              className="pl-10 w-full focus-visible:ring-1"
            />
            <button
              type="button"
              onClick={() => setIsMobileSearchOpen(false)}
              className="p-2"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsMobileSearchOpen(true)}
            className="p-2"
          >
            <Search className="h-5 w-5 text-muted-foreground" />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchInput;
