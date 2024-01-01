import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo1.svg";

const Footer = () => {
  return (
    <div className="flex justify-between items-center flex-wrap bg-primary text-white px-14 py-16">
      <div className="flex flex-col gap-14">
        <img src={Logo} alt="" />
        <ul className=" flex gap-4 text-xl ">
          <li className=" hover:text-orange-400 cursor-pointer">
            <i className="fa-brands fa-facebook "></i>
          </li>
          <li className=" hover:text-orange-400 cursor-pointer">
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li className=" hover:text-orange-400 cursor-pointer">
            <i className="fa-brands fa-square-youtube"></i>
          </li>
          <li className=" hover:text-orange-400 cursor-pointer">
            <i className="fa-brands fa-square-twitter"></i>
          </li>
          <li className=" hover:text-orange-400 cursor-pointer">
            <i className="fa-brands fa-apple"></i>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          <li className=" hover:text-orange-400 cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className=" hover:text-orange-400 cursor-pointer">
            <Link to={"/pricing"}>Pricing</Link>
          </li>
          <li className=" hover:text-orange-400 cursor-pointer">
            <Link to={"/product"}>Products</Link>
          </li>
          <li className=" hover:text-orange-400 cursor-pointer">
            <Link to={"/about-us"}>About Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          <li className=" hover:text-orange-400 cursor-pointer">
            <Link to={"/careers"}>Careers</Link>
          </li>
          <li className=" hover:text-orange-400 cursor-pointer">
            <Link to={"/community"}>Community</Link>
          </li>
          <li className=" hover:text-orange-400 cursor-pointer">
            Privacy Policy
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          name=""
          id=""
          placeholder="email..."
          className=" rounded-full py-1 px-3 text-black outline-none"
        />
        <div>
          <Link
            to={"/sign-up"}
            className=" text-orange-500 py-2 px-5 text-sm rounded-full  bg-white shadow-lg shadow-orange-500/50 hover:bg-orange-500 hover:text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
