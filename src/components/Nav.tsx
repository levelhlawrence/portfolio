"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import profilePic from "../images/profile_pic.jpeg";
import { siteNavLinks, jobLinks } from "./Links";
import Link from "next/link";

export default function Nav() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-center pt-10">
      {/* profile image */}
      <div id="nav-img" className="relative h-28 w-28">
        <Image
          className="w-full h-full object-cover rounded-full "
          src={profilePic}
          alt="profile"
        />
      </div>
      {/* nav header text */}
      <div className="ml-10">
        <h1 className="font-bold text-4xl mb-2">Level Lawrence</h1>
        <h3 className="font-semibold">Full-Stack Developer Portfolio</h3>
        {/* External Links */}
        <p className="text-xs mt-2  text-gray-600">External Links</p>
        {jobLinks.map((link, index) => {
          return (
            <button
              key={index}
              className=" mt-2 first-of-type:border-l-0 border-l border-black capitalize hover:bg-gray-100"
            >
              <Link className="mx-2 px-2" href={link.link}>
                {link.name}
              </Link>
            </button>
          );
        })}
        {/* Internal Links */}
        <div>
          <p className="text-xs mt-2  text-gray-600">Site Navigation</p>
          {siteNavLinks.map((link, index) => {
            return (
              <button
                key={index + 1232}
                className=" mt-2 border-black py-2  rounded-md capitalize hover:bg-gray-400"
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
// className="mx-2 px-2 font-bold"
