"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../assets/Logo/logo.png";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils.js";

const Navbar = () => {
  const pathname = usePathname();

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
          <div className="flex justify-center items-center gap-0">
            <Image
              src={logoImg}
              alt="Logo"
              className="mr-2 w-[70px] h-auto"
            />
            <Link
              href="/"
              className=" btn-ghost text-3xl text-white font-bold flex gap-0"
            >
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
          <Link
            href="/login"
            className="btn btn-outline transition-all duration-300"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="btn btn-outline ml-2 transition-all duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
