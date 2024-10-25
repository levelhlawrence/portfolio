"use client";
import Link from "next/link";

export default function Page() {
  return (
    <section className="flex justify-center items-center px-6 mt-24 md:mt-40 ">
      <div className="max-w-3xl mb-16 text-center md:text-left">
        <p className="text-lg md:text-xl font-semibold text-gray-500 mb-4">
          Hi, I&apos;m Level Lawrence
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Fullstack <span className="text-gray-500">Developer</span>
        </h1>
        <p className="text-md font-medium md:text-lg text-gray-700 mt-4">
          I turn creative ideas into seamless code, building beautiful,
          functional solutions that make an impact. Let&apos;s create something
          extraordinary together.
        </p>
        <div className="mt-8 md:justify-start flex justify-center items-center gap-4">
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
        </div>
      </div>
    </section>
  );
}
