"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="flex justify-center items-center px-6 mt-24 md:mt-40 ">
      <motion.div
        className="max-w-3xl mb-16 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-lg md:text-xl font-semibold text-gray-500 mb-4"
          variants={itemVariants}
        >
          Hi, I&apos;m Level Lawrence
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight"
          variants={itemVariants}
        >
          Fullstack <span className="text-gray-500">Developer</span>
        </motion.h1>
        <motion.p
          className="text-md font-medium md:text-lg text-gray-700 mt-4"
          variants={itemVariants}
        >
          I turn creative ideas into seamless code, building beautiful,
          functional solutions that make an impact. Let&apos;s create something
          extraordinary together.
        </motion.p>
        <motion.div
          className="mt-8 md:justify-start flex justify-center items-center gap-4"
          variants={itemVariants}
        >
          <Link
            href="/contact"
            className="bg-red-500 font-bold px-4 py-2 rounded-md"
          >
            Hire Me
          </Link>
          <Link
            href="/projects"
            className="bg-sky-500 text-white font-bold px-4 py-2 rounded-md"
          >
            See My Work
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
