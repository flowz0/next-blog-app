import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-neutral-600 text-neutral-200 py-8 px-6 w-full fixed z-50">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        <Link href="/" className="text-lg font-bold sm:text-xl">
          Blogger
        </Link>
        <div>
          <Link href="/" className="text-neutral-300 flex items-center gap-x-2 py-2 px-4 rounded-lg ring-2 ring-neutral-400 hover:text-neutral-100 hover:ring-neutral-100">
            Get Started
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}