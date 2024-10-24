"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import profilePic from "../assets/images/profile_pic.jpeg";
import { siteNavLinks } from "./Links";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const menu = document.querySelector("#menu");

    if (menu) {
      if (window.screen.width > 768) {
        menu.classList.add("hidden");
        setIsMenu(true);
      } else {
        menu.classList.remove("hidden");
        setIsMenu(false);
      }
    }
  }, []);

  return (
    <nav className="flex justify-center pt-4 px-6 bg-white">
      <div className="flex justify-between items-center w-full max-w-3xl">
        <Link
          onClick={() => window.screen.width < 768 && setIsMenu(false)}
          href="/"
        >
          <Image
            className="w-14 filter-gray h-14 object-cover rounded-full "
            src={profilePic}
            alt="profile"
          />
        </Link>
        <IoMenu id="menu" onClick={() => setIsMenu(!isMenu)} size={50} />
        {isMenu && (
          <ul className="absolute md:relative md:flex-row md:shadow-none md:text-lg bg-white md:justify-end shadow-lg md:bg-transparent rounded-xl shadow-gray-300 right-0 top-0 h-full flex flex-col w-2/3 md:w-30 items-center text-3xl gap-28 md:gap-4">
            <FaWindowClose
              onClick={() => setIsMenu(!isMenu)}
              size={30}
              className="absolute right-6 top-6 md:hidden"
            />
            {siteNavLinks.map((link, index) => {
              return (
                <button
                  onClick={() =>
                    window.screen.width < 768 && setIsMenu(!isMenu)
                  }
                  key={index + 1232}
                  className={`${
                    link.link === "/"
                      ? pathname === "/"
                        ? "mt-32 md:mt-0 capitalize font-bold bg-gray-400 px-4 rounded-lg mr-2"
                        : "mt-32 md:mt-0 capitalize hover:bg-gray-200 px-4 rounded-lg mr-2"
                      : pathname.startsWith(link.link)
                      ? "capitalize font-bold bg-gray-400 px-4 rounded-lg mr-2"
                      : "capitalize hover:bg-gray-200 px-4 rounded-lg mr-2"
                  }`}
                >
                  <Link href={link.link}>{link.name}</Link>
                </button>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
}
