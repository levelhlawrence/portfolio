"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import profilePic from "../assets/images/profile_pic.jpeg";
import { siteNavLinks, jobLinks } from "./Links";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const menu = document.querySelector("#menu");
    menu?.classList.add("hidden");
    window.screen.width > 768
      ? menu?.classList.add("hidden") & setIsMenu(true)
      : menu?.classList.remove("hidden") & setIsMenu(false);
  }, [window.screen.width]);

  return (
    <nav className="flex justify-center pt-4 px-6 ">
      <div className="flex justify-between items-center w-full max-w-3xl">
        <Link href="/">
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
  // const pathname = usePathname();
  // return (
  //   <nav className="flex max-w-3xl items-center  bg-red-400 justify-between">
  //     <div id="nav-img" className="relative h-28 w-28 md:h-32 md:w-32 mb-6">
  //       <Image
  //         className="w-full filter-gray h-full object-cover rounded-full "
  //         src={profilePic}
  //         alt="profile"
  //         width={200}
  //       />
  //     </div>
  //     {/* nav header text */}
  //     <div className="md:ml-10">
  //       <h1 className="font-bold text-4xl">Level Lawrence</h1>
  //       <h3 className="font-semibold">Web Developer Portfolio</h3>
  //       {/* External Links */}
  //       <p className="text-xs mt-4  text-gray-600">External Links</p>
  //       {jobLinks.map((link, index) => {
  //         return (
  //           <button
  //             key={index}
  //             className=" mt-2 first-of-type:border-l-0 border-l border-black capitalize hover:font-semibold px-4 first-of-type:pl-0"
  //           >
  //             <Link href={link.link}>{link.name}</Link>
  //           </button>
  //         );
  //       })}
  //       {/* Internal Links */}
  //       <div>
  //         <p className="text-xs mt-2 text-gray-600">Site Navigation</p>
  //         {siteNavLinks.map((link, index) => {
  //           return (
  //             <button
  //               key={index + 1232}
  //               className={`${
  //                 link.link === "/"
  //                   ? pathname === "/"
  //                     ? "mt-4 capitalize font-bold bg-gray-400 px-4 py-1 mr-2 rounded-lg"
  //                     : "mt-4 capitalize hover:bg-gray-200 px-4 py-1 mr-2 rounded-lg"
  //                   : pathname.startsWith(link.link)
  //                   ? "mt-4 capitalize font-bold bg-gray-400 px-4 py-1 mr-2 rounded-lg"
  //                   : "mt-4 capitalize hover:bg-gray-200 px-4 py-1 mr-2 rounded-lg"
  //               }`}
  //             >
  //               <Link href={link.link}>{link.name}</Link>
  //             </button>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </nav>
  // );
}
