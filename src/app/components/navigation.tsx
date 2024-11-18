import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <Link href={"/"} className="mr-5 text-blue-500">
        Home
      </Link>
      <Link href={"/about"} className="mr-5 text-blue-500">
        About
      </Link>
      <Link href={"/products/macbook"} className="mr-5 text-blue-500">
        Macbook
      </Link>
    </div>
  );
};

export default Navigation;
