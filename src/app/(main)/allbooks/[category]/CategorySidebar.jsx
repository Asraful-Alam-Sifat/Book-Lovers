"use client";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import data from "@/assets/JSON/data.json";
import Link from "next/link";

const CategorySidebar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

      const uniqueCategories = [
    ...new Set(
      data
        .map((b) => b.category)
        .filter((c) => typeof c === "string" && c.trim() !== "")
    ),
  ];

  const categories = [
    { label: "All Books", value: "all", count: data.length },
    ...uniqueCategories.map((cate) => ({
      label: cate,
      value: String(cate).toLowerCase(),
      count: data.filter((b) => b.category?.toLowerCase() === cate.toLowerCase()).length,
    })),
  ];

  return (
    <div className=" ">
      <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">
        Categories
      </h3>
      <ul className="grid  gap-2">
        {categories.map(({ label, value, count }) => {
          const href =
            value === "all" ? "/allbooks" : `/allbooks?category=${value}`;

          const isActive =
            value === "all"
              ? currentCategory === "all"
              : currentCategory.toLowerCase() === value.toLowerCase();

          return (
            <li key={value}>
              <Link
                href={href}
                className={`flex justify-between items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? "bg-orange-500 text-white" : "hover:bg-gray-100 text-gray-700"}`}
              >
                <span  className="flex flex-col">{label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white text-orange-500' : 'bg-gray-200 text-gray-700'}`}>{count}</span>
              </Link>
            </li>
          );
        })}
        
      </ul>
    </div>
  );
};

export default CategorySidebar;
