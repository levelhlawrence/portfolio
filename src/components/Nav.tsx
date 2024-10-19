"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import profilePic from "../images/profile_pic.jpeg";
import { siteNavLinks, jobLinks } from "./Links";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex text-center items-center md:text-left justify-center flex-col md:flex-row pt-16">
      {/* profile image */}
      <div id="nav-img" className="relative h-28 w-28 md:h-32 md:w-32 mb-6">
        <Image
          className="w-full h-full object-cover rounded-full "
          src={profilePic}
          alt="profile"
        />
      </div>
      {/* nav header text */}
      <div className="md:ml-10">
        <h1 className="font-bold text-4xl">Level Lawrence</h1>
        <h3 className="font-semibold">Web Developer Portfolio</h3>
        {/* External Links */}
        <p className="text-xs mt-4  text-gray-600">External Links</p>
        {jobLinks.map((link, index) => {
          return (
            <button
              key={index}
              className=" mt-2 first-of-type:border-l-0 border-l border-black capitalize hover:font-semibold px-4 first-of-type:pl-0"
            >
              <Link href={link.link}>{link.name}</Link>
            </button>
          );
        })}
        {/* Internal Links */}
        <div>
          <p className="text-xs mt-2 text-gray-600">Site Navigation</p>
          {siteNavLinks.map((link, index) => {
            return (
              <button
                key={index + 1232}
                className={`${
                  pathname === link.link
                    ? "mt-4 capitalize font-bold bg-gray-400 px-4 py-1 mr-2 rounded-lg"
                    : "mt-4 capitalize hover:bg-gray-200 px-4 py-1 mr-2 rounded-lg"
                } `}
              >
                <Link href={link.link}>{link.name}</Link>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
