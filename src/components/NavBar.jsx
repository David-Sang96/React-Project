import React from "react";
import { Link } from "react-router-dom";
import Dark from "../assets/dark.svg";
import Light from "../assets/light.svg";
import Logo from "../assets/logo.svg";
import { useTheme } from "../hooks/useTheme";

const NavBar = () => {
  const { changeTheme, isDark } = useTheme();

  return (
    <div className={` md:max-w-[1250px] m-auto `}>
      <nav className=" flex items-center justify-between py-10 px-3 ">
        <Link to={""}>
          <img src={Logo} alt="logo" />
        </Link>
        <div className="hidden md:block">
          <ul
            className={`flex gap-5 text-primary font-bold ${
              isDark ? "text-white " : ""
            }`}
          >
            <li className={`${isDark ? "hover:text-orange-500" : ""}`}>
              <Link to={"/pricing"}>Pricing</Link>
            </li>
            <li className={`${isDark ? "hover:text-orange-500" : ""}`}>
              <Link to={"/product"}>Product</Link>
            </li>
            <li className={`${isDark ? "hover:text-orange-500" : ""}`}>
              <Link to={"/about-us"}>About Us</Link>
            </li>
            <li className={`${isDark ? "hover:text-orange-500" : ""}`}>
              <Link to={"/careers"}>Careers</Link>
            </li>
            <li className={`${isDark ? "hover:text-orange-500" : ""}`}>
              <Link to={"/community"}>Community</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <Link
            to={"/sign-up"}
            className="  text-white py-2 px-5 text-sm rounded-full  bg-orange-500 shadow-lg shadow-orange-500/50  hover:bg-white hover:text-orange-500"
          >
            Get Started
          </Link>
          <div className="flex ">
            {isDark && (
              <img
                src={Light}
                alt=""
                className="w-7 cursor-pointer"
                onClick={() => changeTheme("light")}
              />
            )}
            {!isDark && (
              <img
                src={Dark}
                alt=""
                className="w-7 cursor-pointer"
                onClick={() => changeTheme("dark")}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
