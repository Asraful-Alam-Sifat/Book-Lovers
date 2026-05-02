import Image from "next/image";
import data from "@/assets/JSON/data.json";

const AllBooks = async ({ searchParams }) => {
    const params = await searchParams;
  const category = params?.category || "all";

  const filteredBooks =
    category === "all"
      ? data
      : data.filter(
          (book) => book.category?.toLowerCase() === category.toLowerCase(),
        );

  return (
  <div className="px-8 py-6">
    {category === 'all' && (
        <div>hellow</div>
    )}
      <h1 className="text-2xl font-bold mb-6">
        {category === "all" ? "All Books" : category} 
        <span className="text-sm font-normal text-gray-500 ml-2">
          ({filteredBooks.length} books)
        </span>
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <div key={book.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <Image
              src={book.image_url}
              alt={book.title}
              width={400}
                height={300}
              className="w-full h-48 object-cover rounded"
            />
            <div className="p-4">
              <h2 className="font-semibold text-sm">{book.title}</h2>
              <p className="text-xs text-gray-500 mt-1">By {book.author}</p>
              <span className="inline-block mt-2 text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                {book.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="text-gray-500 text-center mt-20">No books found in this category.</p>
      )}
    </div>
  );
};

export default AllBooks;
