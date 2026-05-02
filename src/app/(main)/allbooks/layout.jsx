import React, { Suspense } from "react";
import CategorySidebar from "./[category]/CategorySidebar.jsx";

const AllBooksLayout = ({ children }) => {
  return (
       <div className="flex min-h-screen">
      
      <aside className="w-64 bg-blue-100 shrink-0 self-stretch p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <CategorySidebar />
        </Suspense>
      </aside>

      <main className="flex-1 px-8 py-6">
        {children}
      </main>

    </div>
  );
};

export default AllBooksLayout;
