import Image from "next/image";
import data from "@/assets/JSON/data.json";
import Link from "next/link";

export const metadata = {
  title: "Book Lovers-All-Books",
  description: "Online Book Borrowing Platform ",
};

const AllBooks = async ({ searchParams }) => {
  const params = await searchParams;
  const category = params?.category || "all";
  const query = params?.q?.toLowerCase().trim() || "";

  const filteredBooks = data
    .filter((book) =>
      category === "all"
        ? true
        : book.category?.toLowerCase() === category.toLowerCase(),
    )
    .filter((book) =>
      query ? book.title?.toLowerCase().includes(query) : true,
    );

  return (
    <div className="py-5">
      <h1 className="text-2xl font-bold mb-6">
        {query ? (
          <>
            Results for <span className="text-blue-700">&ldquo;{params.q}&rdquo;</span>
          </>
        ) : category === "all" ? (
          "All Books"
        ) : (
          category
        )}
        <span className="text-sm font-normal text-gray-500 ml-2">
          ({filteredBooks.length} books)
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="border-3 border-gray-300  rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4 "
          >
            <Image
              src={book.image_url}
              alt={book.title}
              width={400}
              height={500}
              className=" h-[300px] object-contain"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl text-center">{book.title}</h2>
              <p className="text-lg text-gray-500 mt-1 text-center">
                By {book.author}
              </p>
            </div>

            <div className="text-center">
              <Link
                href={`/books/${book.id}`}
                className="btn bg-blue-900 text-white rounded-lg hover:bg-blue-950 hover:border-2 hover:border-gray-500 transition-all duration-300 "
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="text-gray-500 text-center mt-20">
          {query
            ? `No books found for "${params.q}".`
            : "No books found in this category."}
        </p>
      )}
    </div>
  );
};

export default AllBooks;
