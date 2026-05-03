import { getLocalBooks } from "@/lib/data";
import Image from "next/image";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const booksdata = await getLocalBooks();
  const book = booksdata.find((b) => b.id === parseInt(id));

  return {
    title: book.title,
    description: book.description,
  };
};

const BooksDetails = async ({ params }) => {
  const { id } = await params;
  const booksdata = await getLocalBooks();
  const books = booksdata.find((b) => b.id === parseInt(id));

  return (
    <div className=" max-w-7xl mx-auto my-10 px-2 ">
      <h1 className="font-extrabold text-4xl ">Details</h1>

      <div className="bg-base-100 rounded-xl p-3 md:p-5 flex flex-col justify-center items-stretch lg:flex-row lg:gap-10 gap-4 border border-gray-300 shadow-xl">
        <div className=" relative flex-3 min-h-[300px] ">
          <Image
            src={books.image_url}
            alt={books.title}
            fill
            className=" object-contain "
            priority
          />
        </div>

        <div className="my-3 flex-[3] ">
          <div className="text-center lg:text-start space-y-1.25">
            <h1 className="font-bold text-xl capitalize ">
              Title: [{books.title}]
            </h1>
            <h1 className="font-bold text-xl capitalize">
              Author: [{books.author}]
            </h1>
            <h1 className="font-bold text-xl capitalize">
              Category: [{books.category}]
            </h1>
          </div>

          <div className="my-3 text-center lg:text-start">
            <p className="text-base-content mb-3 lg:max-w-3/5">
              {books.description}
            </p>
            <h1 className="font-bold text-xl capitalize">
              Available Quantity: [{books.available_quantity} copies left]
            </h1>
          </div>

          <div className="">
            <button className="btn text-white inline w-full lg:w-3/5 bg-green-800 font-bold text-lg capitalize rounded-lg hover:bg-green-900 ">
              Borrow this book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
