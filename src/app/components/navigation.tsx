"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center items-center p-4">
      <Link
        href={"/"}
        className={pathname === "/" ? "font-bold mr-4" : "mr-5 text-blue-500"}
      >
        Home
      </Link>

      <Link
        href={"/about"}
        className={
          pathname === "/about" ? "font-bold mr-4" : "mr-5 text-blue-500"
        }
      >
        About
      </Link>

      <Link
        href={"/products/macbook"}
        className={
          pathname === "/products/macbook"
            ? "font-bold mr-4"
            : "mr-5 text-blue-500"
        }
      >
        Macbook
      </Link>

      <SignInButton mode="modal" />
    </nav>
  );
};

export default Navigation;
