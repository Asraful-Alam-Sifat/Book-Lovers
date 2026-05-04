"use client";
import { authClient } from "@/lib/auth-client"; // Import your client auth
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const BorrowBook =  () => {
    
const handletoast = () => {
    toast.success("Borrow This Book Successfully")
}

  return (
    <div>
       <button onClick={handletoast} className="btn text-white inline w-full lg:w-3/5 bg-green-800 font-bold text-lg capitalize rounded-lg hover:bg-green-900">
          Borrow this book
       </button>
    </div>
  );
};

export default BorrowBook;

