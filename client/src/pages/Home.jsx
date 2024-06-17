import Selfie from "../images/selfPortrait2.svg";
import { TypeAnimation } from "react-type-animation";

const Home = ({ toggleMenu, setToggleMenu }) => {
  const menuHandler = () => {
    // toggling menu and icons
    setToggleMenu(!toggleMenu);
  };
  return (
    <section
      style={{ backgroundColor: "#34353a" }}
      id="home"
      className="min-h-screen flex justify-center"
    >
      <div className="container mt-20">
        <div
          id="home-content"
          className="flex flex-col-reverse justify-between items-center text-white"
        >
          <div className="text-center mt-20 mx-8">
            <h1 className="text-2xl font-thin">Hello, I'm </h1>
            <TypeAnimation
              sequence={[
                "Level Lawrence",
                1000,
                "a Fullstack Developer",
                1000,
                "a Web Designer",
                1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
              className="text-blue-500 text-4xl font-bold"
            />

            <p className="text-2xl font-thin pt-4">
              I specialize in solving business problems with creative solutions.
            </p>
            <div>
              <button
                className="text-xl mr-4 text-white bg-blue-500 border-blue-500 hover:bg-transparent hover:border-white border-4 py-2 px-4 rounded-lg mt-8 transition-all hover:text-2xl duration-300"
                onClick={() => menuHandler()}
              >
                <a href="portfolio">My Work</a>
              </button>
              <button
                className="text-xl text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white border-4 py-2 px-4 rounded-lg mt-8 transition-all hover:text-2xl duration-30"
                onClick={() => menuHandler()}
              >
                <a href="contact">Contact Me</a>
              </button>
            </div>
          </div>
          <img
            className="brightness-75 w-1/2 bg-blue-500 rounded-full"
            src={Selfie}
            alt="Level Lawrence Selfie"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
