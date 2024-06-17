import { Link } from "react-router-dom";
// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Logo from "../images/Logo2.png";
// react
import { useState, useEffect } from "react";
// routes
import Routes from "./utils/Routes";
// framer
import { motion } from "framer-motion";

const Navbar = ({ toggleMenu, setToggleMenu }) => {
  const menuHandler = () => {
    // toggling menu and icons
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };

  return (
    <nav
      className="flex justify-center w-full py-4"
      style={{ backgroundColor: "#34353a" }}
    >
      <div className="container flex justify-between items-center mx-8">
        <div>
          <Link to="/">
            <img src={Logo} className="w-10" alt="logo" />
          </Link>
        </div>
        {/* Menu */}
        {!toggleMenu && (
          <motion.div
            className="md:hidden"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
          >
            <RxHamburgerMenu
              onClick={menuHandler}
              className="burger text-white z-1"
              id="burger"
              size={33}
            />
          </motion.div>
        )}
        {toggleMenu && (
          <motion.div
            className="md:hidden"
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
          >
            <IoClose
              size={33}
              id="x-con"
              className=" text-white z-1 "
              onClick={() => menuHandler()}
            />
          </motion.div>
        )}

        {/* NavLinks */}
        {toggleMenu && (
          <motion.ul
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            animate={{ x: 0, opacity: 1 }}
            id="nav-menu"
            className="bg-blue-500 rounded absolute right-2 top-14 flex-col bottom-0 w-60 z-10 text-center "
          >
            {Routes.map((route, index) => {
              return (
                <motion.li
                  initial={{ opacity: 0, rotate: 10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{
                    delay: index / 5,
                  }}
                  className="text-white mb-12 md:mb-0 mt-2 md:mt-0 md:border-none text-lg border-b mx-10 md:leading-0 md:mx-0 leading-10 "
                  key={index}
                >
                  {route.name === "Contact" ? (
                    <button
                      onClick={() => menuHandler()}
                      className="border-4 px-4 rounded-lg mb-4 md:mb:0 font-bold "
                    >
                      <a href={route.link}>Contact</a>
                    </button>
                  ) : (
                    <Link
                      onClick={() => menuHandler()}
                      to={`${
                        route.link === "home" ? (route.link = "") : route.link
                      }`}
                    >
                      {route.name}
                    </Link>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
