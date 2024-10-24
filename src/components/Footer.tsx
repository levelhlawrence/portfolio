import { siteNavLinks, jobLinks } from "../components/Links";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black flex justify-center mt-auto py-4  text-gray-400">
      <div className="flex w-full justify-center flex-col items-center align-middle max-w-3xl">
        <Link href="/" className="font-bold">
          levellawrence.net &copy; 2024
        </Link>
        <ul className="flex">
          {siteNavLinks.map((path) => {
            return (
              <li key={uuidv4()} className="mt-2 capitalize">
                <Link href={path.link}>
                  <p>_{path.name}/</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-7 pt-4">
          {jobLinks.map((path) => {
            return (
              <li key={uuidv4()}>
                <Link
                  className="flex flex-col items-center"
                  target="_blank"
                  href={path.link}
                >
                  {path.icon}
                  <p className="text-xs">{path.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
