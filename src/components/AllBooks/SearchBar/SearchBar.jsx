"use client";
import { useState } from "react";
import BooksData from "@/assets/JSON/data.json";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("q") || "");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim()) {
      params.set("q", value.trim());
    } else {
      params.delete("q");
    }
    router.push(`/allbooks?${params.toString()}`);
  };

  return (
    <div className="bg-blue-900 text-white py-15">
      <div className="container mx-auto p-2">
        <h1 className="font-bold text-4xl uppercase text-center mb-7">
          All Books
        </h1>
        <div className="w-[450px] sm:w-[600px] mx-auto relative">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search for books by title..."
              className="bg-white text-black rounded-md p-1.5 text-xl font-medium w-full pl-5"
            />
            <button
              type="submit"
              className="absolute top-2 right-7 text-gray-500"
            >
              <Search />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
