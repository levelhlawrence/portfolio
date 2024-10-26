import Image from "next/image";
import projectImg from "./images/projectImg1.svg";
import chefPic from "./images/Chef.png";
import workoutPic from "./images/final.jpg";
import chef2 from "./images/chef2.jpg";
import health from "./images/health.jpg";
import adMain from "./images/adMain.jpg";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function Page() {
  const adImages = [chefPic, chef2, workoutPic, health, adMain];
  return (
    <section className="flex justify-center items-center mt-8 px-6">
      <div className=" text-center md:text-left max-w-3xl min-w-md w-full">
        <div>
          <Link
            href="https://retreat.pacesworldwide.com"
            className="bg-red-500 text-gray-50 text-xs px-2 py-1 font-semibold rounded mr-2 hover:cursor-pointer"
          >
            Project Site
          </Link>
          <Link
            href="https://github.com/levelhlawrence/pacesresort.git"
            className="bg-gray-300 text-xs px-2 font-semibold py-1 rounded hover:cursor-pointer"
          >
            Github Repo
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-4 md:text-left text-center">
          Paces Project
        </h1>
        {/* project scope area */}
        <div className="flex flex-col md:flex-row mb-10 items-center md:items-start">
          <div>
            <h4 className="font-bold text-gray-600 text-xl mt-10 ">
              Project Scope
            </h4>
            <p className="md:mr-8 mb-6 md:mb-0">
              This project was created to attract clients to an offshore
              retreat. The design was the result of detailed meetings with the
              client over a few weeks. We collaborated in figma to stay on task
              and adjusted design as needed.
            </p>
          </div>
          <Image src={projectImg} alt="projectImg" width={300} height={300} />
        </div>
        <h2 className="font-bold text-2xl mt-4">Ad Campaign</h2>
        <p>
          The client requested posters for each event listed on the itinerary. I
          designed each using Adobe PhotoShop and Affinity Designer. Each final
          design was approved before release.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8 mb-10">
          {adImages.map((img) => (
            <Image
              key={uuidv4()}
              src={img}
              alt="ads"
              placeholder="blur"
              className="w-full h-full rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
