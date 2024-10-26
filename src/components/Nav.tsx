"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import profilePic from "../assets/images/profile_pic.jpeg";
import { siteNavLinks } from "./Links";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const menu = document.querySelector("#menu");

      if (window.innerWidth > 768) {
        setIsMenu(true);
        console.log(menu);
        menu?.classList.add("hidden");
      } else {
        setIsMenu(false);
        menu?.classList.remove("hidden");
        console.log(menu);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //animation logic
  const navMenuVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 40 },
    transition: { delay: 0.2 },
  };

  return (
    <motion.nav className="flex justify-center md:h-20 md:py-4 md:items-center pt-4 px-6 relative z-50">
      <motion.div className="flex justify-between items-center w-full max-w-3xl">
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
        <div id="menu">
          <IoMenu onClick={() => setIsMenu(!isMenu)} size={50} />
        </div>
        {isMenu && (
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={navMenuVariants}
            className="absolute md:max-h-20 md:relative md:flex-row md:shadow-none md:text-lg bg-white md:justify-end shadow-lg md:bg-transparent rounded-tl-xl rounded-bl-xl shadow-gray-300 right-0 top-0 bottom-0 h-screen flex flex-col w-2/3 md:w-30 items-center text-3xl gap-28 md:gap-4"
          >
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
          </motion.ul>
        )}
      </motion.div>
    </motion.nav>
  );
}
