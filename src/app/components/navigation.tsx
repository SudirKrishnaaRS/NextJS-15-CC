"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div>
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
    </div>
  );
};

export default Navigation;
