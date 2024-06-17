import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiDjango } from "react-icons/si";

const About = () => {
  return (
    <section
      style={{ backgroundColor: "#34353a" }}
      id="about"
      className="min-h-screen flex justify-center"
    >
      <div className="container mx-8">
        <div className="text-white">
          {/* About section */}
          <h1 className="text-2xl mt-8 mb-4">About Me</h1>
          <div className="flex align-top">
            <div className="w-10 h-1 bg-blue-500 pr-10 mt-2 mr-2">
              {/*divider*/}
            </div>
            <p className="text-gray-300 rounded-xl">
              Hello! I'm Level Lawrence, a dedicated Full Sail University
              student with a passion for coding and problem-solving. My journey
              into the world of technology began two years ago as a hobby, and
              since then, it has blossomed into a full-fledged pursuit of a
              career in software development.
            </p>
          </div>
          {/* Skills section */}
          <div>
            <h1 className="text-2xl mt-8">Skills</h1>
            <div
              id="icon-container"
              className="flex flex-wrap justify-center gap-2 mt-4"
            >
              <div
                className="w-24 h-24 rounded-lg flex flex-col items-center justify-between"
                style={{ backgroundColor: "#3d3e42" }}
              >
                <FaPython size={40} className="text-blue-500 mt-2" />
                <p className="mb-2">Python</p>
              </div>
              <div
                className="w-24 h-24 rounded-lg flex flex-col items-center justify-between"
                style={{ backgroundColor: "#3d3e42" }}
              >
                <SiJavascript size={40} className="text-yellow-500 mt-2" />
                <p className="mb-2">JavaScript</p>
              </div>
              <div
                className="w-24 h-24 rounded-lg flex flex-col items-center justify-between"
                style={{ backgroundColor: "#3d3e42" }}
              >
                <div className="flex">
                  <FaHtml5 size={40} className="text-orange-500 mt-2" />
                  <FaCss3Alt size={40} className="text-blue-400 mt-2" />
                </div>
                <p className="text-center text-xs mt-3 font-bold mb-2">
                  HTML and CSS
                </p>
              </div>
              <div
                className="w-24 h-24 rounded-lg flex flex-col items-center justify-between"
                style={{ backgroundColor: "#3d3e42" }}
              >
                <FaNode size={60} className="text-blue-500" />
                <p className="mb-2">Node JS</p>
              </div>
              <div
                className="w-24 h-24 rounded-lg flex flex-col items-center justify-between"
                style={{ backgroundColor: "#3d3e42" }}
              >
                <SiMongodb size={40} className="text-green-700 mt-2" />
                <p className="mb-2">MongoDB</p>
              </div>
              <div
                className="w-24 h-24 rounded-lg flex flex-col items-center justify-between"
                style={{ backgroundColor: "#3d3e42" }}
              >
                <SiDjango size={40} className="text-green-800 mt-2" />
                <p className="mb-2">Django</p>
              </div>
              <div
                className="w-24 h-24 rounded-lg flex flex-col items-center justify-between"
                style={{ backgroundColor: "#3d3e42" }}
              >
                <SiMysql size={60} className="text-blue-500 mb-2" />
                <p className="mb-2">MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
