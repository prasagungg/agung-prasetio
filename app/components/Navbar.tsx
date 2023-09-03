"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex justify-center py-3 text-center">
        <h3 className="text-xl my-0 font-play">agungprasetio</h3>
      </div>
      <div className="mt-4">
        <ul className="flex decoration-none list-none gap-5 justify-center p-0 flex-row text-right pr-8 lg:p-0 lg:text-center">
          <li>
            <Link
              className={` ${
                pathname === "/" ? "border-b-2" : "text-gray-200"
              } p-2`}
              href="/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={` ${
                pathname === "/projects" ? "border-b-2" : "text-gray-200"
              } p-2`}
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={` ${
                pathname === "/contact" ? "border-b-2" : "text-gray-200"
              } p-2`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
