import React, { Suspense } from "react";
import CategorySidebar from "./[category]/CategorySidebar.jsx";
import SearchBar from "@/components/AllBooks/SearchBar/SearchBar.jsx";

const AllBooksLayout = ({ children }) => {
  return (
    <div>
      <Suspense
        fallback={<div className="bg-blue-900 text-white py-15 h-24" />}
      >
        <SearchBar />
      </Suspense>

      <div className="flex min-h-screen">
        <aside className=" bg-blue-100 shrink-0 self-stretch p-4 w-[150px] lg:w-2xs ">
          <Suspense fallback={<div>Loading...</div>}>
            <CategorySidebar />
          </Suspense>
        </aside>

        <main className="flex-1 px-8 py-6">{children}</main>
      </div>
    </div>
  );
};

export default AllBooksLayout;
