"use client";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <div>
      <h1>About</h1>
      <button
        className="bg-blue-400 text-white p-2 rounded-md"
        onClick={() => router.push("/")}
      >
        Go Home
      </button>
    </div>
  );
};

export default About;
