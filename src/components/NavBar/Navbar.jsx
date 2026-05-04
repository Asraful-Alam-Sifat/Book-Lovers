"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../assets/Logo/logo.png";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils.js";
import { authClient } from "@/lib/auth-client";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const {data: session, isPending} = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/login')
        }
      }
    })
  }

  return (
    <div>
      <div className="navbar shadow-sm bg-blue-950 sm:px-20 px-0 flex-col sm:flex-row gap-y-3">
        <div className="navbar-start">
          <div className="dropdown text-white">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className=" dropdown-content bg-gray-500 rounded-box z-100 mt-3 w-52 p-2 shadow uppercase "
            >
              <li>
                <Link
                  href="/"
                  className={cn(
                    "font-medium text-2xl transition-colors",
                    pathname === "/"
                      ? " text-yellow-500 underline"
                      : "text-white",
                  )}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/allbooks"
                  className={cn(
                    "font-medium text-2xl transition-colors",
                    pathname === "/allbooks"
                      ? "text-yellow-500 underline"
                      : "text-white",
                  )}
                >
                  All Books
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className={cn(
                    "font-medium text-2xl transition-colors",
                    pathname === "/profile"
                      ? "text-yellow-500 underline"
                      : "text-white",
                  )}
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            
            <Link
              href="/"
              className=" btn-ghost text-3xl text-white font-bold flex flex justify-center items-center gap-0"
            >
              <Image src={logoImg} alt="Logo" className="mr-2 w-[70px] h-auto" />
              Book<span className="text-yellow-700">Lovers</span>
            </Link>
          </div>
        </div>
        <div className="menu navbar-center hidden lg:flex">
          <ul className="flex px-1 uppercase">
            <li>
              <Link
                href="/"
                className={cn(
                  "font-medium text-2xl transition-colors",
                  pathname === "/" ? "text-yellow-500 underline" : "text-white",
                )}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/allbooks"
                className={cn(
                  "font-medium text-2xl transition-colors",
                  pathname === "/allbooks"
                    ? "text-yellow-500 underline"
                    : "text-white",
                )}
              >
                All Books
              </Link>
            </li>

            <li>
              <Link
                href="/profile"
                className={cn(
                  "font-medium text-2xl transition-colors",
                  pathname === "/profile"
                    ? "text-yellow-500 underline"
                    : "text-white",
                )}
              >
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end text-white justify-center sm:justify-end">

         {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : session ? (
          // 2. Show this if logged IN
          <div className="flex items-center gap-3">
            <span className="font-medium hidden sm:block">
              {session.user.name}
            </span>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Link href="/profile">
                  <Image 
                    src={session.user.image || "/default-avatar.png"} 
                    alt="User Profile" 
                    width={80}
                    height={80}
                  />
                </Link>
              </div>
            </div>
            <button 
              onClick={handleLogout} 
              className="btn btn-error btn-outline btn-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          // 3. Show this if logged OUT
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-outline ml-2 transition-all duration-300">
              Login
            </Link>
            <Link href="/register" className="btn btn-outline ml-2 transition-all duration-300">
              Register
            </Link>
          </div>
        )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
