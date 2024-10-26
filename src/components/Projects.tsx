"use client";
import { ProjectData } from "../assets/data/ProjectData";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const projectVariant = {
    show: { opacity: 1, y: 0 },
    hide: { opacity: 0, y: 30 },
  };

  return (
    <motion.article className="mt-6">
      {ProjectData.map((myData, index) => {
        return (
          <motion.div
            initial="hide"
            animate="show"
            variants={projectVariant}
            key={uuidv4()}
          >
            <Link
              href="/projects/paces"
              className="text-gray-600 hover:text-black transition-all duration-150"
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
                placeholder="blur"
                className="rounded-md mt-4 hover:shadow-lg hover:shadow-gray-500 transition-all duration-150 hover:w-80"
              />
            </Link>
          </motion.div>
        );
      })}
    </motion.article>
  );
}
