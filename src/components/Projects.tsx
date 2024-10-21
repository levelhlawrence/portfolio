"use client";
import { ProjectData } from "../assets/data/ProjectData";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  console.log(ProjectData[0].title);
  return (
    <article className="mt-6">
      {ProjectData.map((myData, index) => {
        return (
          <Link
            href="/projects/paces"
            className="text-gray-600 hover:text-black transition-all duration-150"
            key={uuidv4()}
          >
            <div className="flex gap-4 font-bold items-center">
              <p className="border text-center px-4 py-2 rounded-full">
                {index + 1}
              </p>
              <h4>{myData.title} project</h4>
            </div>
            <Image
              src={myData.image}
              alt={`${myData.title} project`}
              width={300}
              height={300}
              className="rounded-md mt-4 hover:shadow-lg hover:shadow-gray-500 transition-all duration-150 hover:w-80"
            />
          </Link>
        );
      })}
    </article>
  );
}
