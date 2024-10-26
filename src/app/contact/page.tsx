"use client";

import Link from "next/link";
import { IoNewspaperSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Page() {
  const containerVariant = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
    hidden: { opacity: 0 },
  };

  const contactChild = {
    show: { opacity: 1, y: 10, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 0 },
  };

  return (
    <motion.section className="flex justify-center px-6">
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariant}
        className=" max-w-3xl mt-32 mb-16 md:text-left"
      >
        <motion.h1 variants={contactChild} className="text-5xl font-bold mb-4 ">
          THANKS <span className="text-gray-500">FOR REACHING OUT!</span>
        </motion.h1>
        <motion.p
          variants={contactChild}
          className="font-semibold mb-12 md:text-lg"
        >
          These are the many ways you can get in touch
        </motion.p>
        <motion.div variants={contactChild}>
          <ul className="mt-6">
            <li className="list-item underline mb-4">
              <Link
                className="flex items-center gap-2"
                href="mailto:levelhlawrence@gmail.com"
                target="_blank"
              >
                <IoMdMail />
                <p className="text-sm md:text-md">levelhlawrence@gmail.com</p>
              </Link>
            </li>
            <li className="list-item underline mb-4">
              <Link
                className="flex items-center gap-2"
                href="https://www.linkedin.com/in/level-lawrence-35173871/"
                target="_blank"
              >
                <FaLinkedin />
                <p className="text-sm md:text-md">
                  https://www.linkedin.com/in/level-lawrence-35173871/
                </p>
              </Link>
            </li>
            <li className="list-item underline mb-10">
              <Link
                className="flex items-center gap-2"
                href="https://github.com/levelhlawrence"
                target="_blank"
              >
                <FaGithub />
                <p className="text-sm md:text-md">
                  https://github.com/levelhlawrence
                </p>
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.button
          variants={contactChild}
          className="bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          <Link
            href="https://drive.google.com/file/d/1S-09wIXIndkAFgI-AkxAVWmwF2xNv-jN/view?usp=sharing"
            target="_blank"
            className="flex items-center gap-2"
          >
            Download Resume
            <IoNewspaperSharp />
          </Link>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
