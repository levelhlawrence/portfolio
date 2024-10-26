"use client";
import Projects from "../../components/Projects";
import { motion } from "framer-motion";

export default function Page() {
  const mainProjectVariant = {
    show: { opacity: 1, y: 0 },
    hide: { opacity: 0, y: -30 },
  };

  return (
    <section className="flex justify-center flex-col items-center mt-24 px-6">
      <div className="m max-w-3xl min-w-md w-full">
        <motion.h1
          initial="hide"
          animate="show"
          variants={mainProjectVariant}
          className="text-3xl font-bold mb-4 md:text-left text-center"
        >
          My Projects
        </motion.h1>
        <div className="flex items-center justify-center md:justify-start">
          <Projects />
        </div>
      </div>
    </section>
  );
}
