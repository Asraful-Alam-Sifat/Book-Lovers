import UpdateProfileModal from "@/components/Profile/UpdateProfileModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Book Lovers-Profile",
  description: "Online Book Borrowing Platform ",
};

const Profile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if(!session){
    redirect('/login');
  }

  const user = session?.user;

  return (
    <div className="container mx-auto my-20 bg-base-300 rounded-box p-20">
      <div className="max-w-[600px] mx-auto bg-base-100 rounded-box p-10">
        <div className="text-center my-5">
          <Image
          src={user?.image || "/default-avatar.png"}
            alt="Profile"
             width={200}
             height={250} 
              className="rounded-full h-[200px] mx-auto"/>
        </div>
        <div className="text-center my-5 mt-8">
          <h3 className="font-bold text-3xl uppercase text-olive-900">
            <span>{user?.name || "No Name"}</span>
          </h3>
          <h3 className="font-bold text-base sm:text-xl  uppercase text-gray-700 mt-2">
            email: <span className="lowercase text-center">{user?.email}</span>
          </h3>
        </div>

        <UpdateProfileModal />
      </div>
    </div>
  );
};

export default Profile;
