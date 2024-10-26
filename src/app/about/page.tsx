"use client";
import { motion } from "framer-motion";

export default function Page() {
  const aboutVariant = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
    hidden: { opacity: 0 },
  };

  const aboutChild = {
    show: { opacity: 1, y: 10, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 0 },
  };
  return (
    <section className="flex justify-center mt-24  mb-20 px-6 text-center md:text-left">
      <motion.div
        initial="hidden"
        animate="show"
        variants={aboutVariant}
        className=" max-w-3xl"
      >
        <motion.h1 variants={aboutChild} className="text-5xl font-bold mb-4 ">
          <span className="text-gray-500">About</span> Me
        </motion.h1>
        <motion.p variants={aboutChild}>
          <span className="font-bold">Hello!</span> I&apos;m a passionate
          full-stack developer with a knack for turning ideas into functional
          and user-friendly web applications. With a background in the military,
          I&apos;ve honed discipline, teamwork, and problem-solving skills that
          I bring to every project. By incorporating business contextual
          graphics into my work, I create visually engaging interfaces that
          effectively communicate complex information and enhance user
          experience. With a strong foundation in both front-end and back-end
          technologies like{" "}
          <span className="text-yellow-600 font-bold">JavaScript</span>,{" "}
          <span className="text-blue-600 font-bold">ReactJS</span>,{" "}
          <span className="text-green-600 font-bold">NodeJS</span>, and{" "}
          <span className="text-yellow-600 font-bold">Py</span>
          <span className="text-gray-500 font-bold">thon</span>, I enjoy the
          challenge of crafting seamless digital experiences.
        </motion.p>
        <motion.p variants={aboutChild} className="my-4">
          Whether I&apos;m building interactive user interfaces or developing
          robust server-side logic, I thrive on solving complex problems and
          continually learning new technologies. When I&apos;m not coding, you
          might find me exploring the latest tech trends, contributing to
          open-source projects, or delving into a good book. I&apos;m always
          eager to collaborate on exciting projects and bring innovative ideas
          to life—feel free to explore my portfolio and reach out if you&apos;d
          like to connect!
        </motion.p>
      </motion.div>
    </section>
  );
}
