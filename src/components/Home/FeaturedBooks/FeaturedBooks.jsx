import { getLocalBooks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const FeaturedBooks = async () => {
  const booksdata = await getLocalBooks();
  const featuredBooks = booksdata.slice(0, 4);

  return (
    <div className="container mx-auto py-15 ">
      <h1 className="font-bold text-5xl text-center uppercase">
        Featured Books
      </h1>

      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-3 mt-7  justify-around gap-5 sm:place-items-center">
        {featuredBooks.map((book) => (
          <div
            key={book.id}
            className="w-[500px] sm:w-[300px] md:w-[250px] lg:w-[250px] xl:w-[300px] bg-base-100 p-5 rounded-xl shadow-lg border-3 border-gray-200 hover:border-blue-500 transition-all duration-400 flexflex-col items-center h-full"
          >
            <div className="relative aspect-2/3 w-full overflow-hidden rounded-lg">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                sizes={20}
                className="object-cover"
              />
            </div>

            <h2 className="font-bold text-xl text-center mt-3 ">
              {book.title}
            </h2>
            <p className="text-center font-medium text-gray-500 text-lg capitalize">
              {book.author}
            </p>
            <Link
              href={`/books/${book.id}`}
              className="flex justify-center mt-5"
            >
              <button className="btn bg-blue-900 text-white rounded-lg hover:bg-blue-950 hover:border-2 hover:border-gray-500 transition-all duration-300 ">
                view details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
