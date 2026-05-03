import { getLocalBooks } from "@/lib/data";
import { BookOpenText, BrainCircuit, Cpu } from "lucide-react";
import Link from "next/link";
import React from "react";

const GenreSpotLight = async () => {
  const booksData = await getLocalBooks();
  // console.log(booksData);
  return (
    <div className="container mx-auto py-8 my-30">
      <h1 className="font-bold text-5xl text-center uppercase">
        genre spotlight
      </h1>

      <div className="grid md:grid-cols-3 gap-15 mt-5 px-2">
        <Link
          href={"/allbooks?category=story"}
          className="bg-base-100 rounded-xl p-8 border-4 border-gray-300 hover:shadow-lg hover:border-cyan-600 hover:bg-gray-100 transition-all  duration-300"
        >
          <BookOpenText className="w-[100px] h-[100px] mx-auto" />
          <p className="font-extrabold text-3xl uppercase text-center mt-4">
            story
          </p>
        </Link>

        <Link
          href={"/allbooks?category=tech"}
          className="bg-base-100 rounded-xl p-8 border-4 border-gray-300 hover:shadow-lg hover:border-cyan-600 hover:bg-gray-100 transition-all  duration-300"
        >
          <Cpu className="w-[100px] h-[100px] mx-auto" />
          <p className="font-extrabold text-3xl uppercase text-center mt-4">
            tech
          </p>
        </Link>

        <Link
          href={"/allbooks?category=science"}
          className="bg-base-100 rounded-xl p-8 border-4 border-gray-300 hover:shadow-lg hover:border-cyan-600 hover:bg-gray-100 transition-all  duration-300"
        >
          <BrainCircuit className="w-[100px] h-[100px] mx-auto" />
          <p className="font-extrabold text-3xl uppercase text-center mt-4">
            science
          </p>
        </Link>
      </div>
    </div>
  );
};

export default GenreSpotLight;
