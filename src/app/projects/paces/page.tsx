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
      <div className="m max-w-3xl min-w-md w-full">
        <div>
          <Link
            href="https://retreat.pacesworldwide.com"
            className="bg-sky-600 text-xs px-4 py-1 rounded-lg mr-4 hover:cursor-pointer"
          >
            Project Site
          </Link>
          <Link
            href="https://github.com/levelhlawrence/pacesresort.git"
            className="bg-gray-300 text-xs px-4 py-1 rounded-lg hover:cursor-pointer"
          >
            Github Repo
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-left">Paces Project</h1>
        <h4 className="font-bold text-gray-600 text-xl mt-10">Project Scope</h4>
        <div className="flex">
          <p className="mr-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore
            explicabo esse commodi praesentium non aspernatur beatae dignissimos
            at perspiciatis ratione, dolores voluptatem nostrum! Minima, autem.
            Ducimus sint, voluptatibus delectus eos illo rerum, odit
            exercitationem deleniti voluptate labore praesentium eveniet! Veniam
            molestiae voluptatibus est? Necessitatibus quis incidunt esse
            pariatur? Cupiditate.
          </p>

          <Image src={projectImg} alt="projectImg" width={300} height={300} />
        </div>
        <h4 className="font-bold text-xl mt-4 text-gray-600">Design</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          perspiciatis reprehenderit culpa tenetur voluptas? Magnam quisquam
          modi dicta quaerat sit.
        </p>

        <h2 className="font-bold text-2xl mt-4">Ad Campaign</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et velit
          dolore quos, nostrum cum vero similique. Vitae, doloremque. Fugit,
          unde.
        </p>
        <div className="flex gap-6 flex-wrap mt-8 mb-10">
          {adImages.map((img) => (
            <Image
              key={uuidv4()}
              src={img}
              alt="ads"
              width={200}
              height={200}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
