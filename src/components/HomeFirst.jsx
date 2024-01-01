import React from "react";
import { Link } from "react-router-dom";
import Table from "../assets/dashboard.svg";
import { useTheme } from "../hooks/useTheme";

const HomeFirst = () => {
  const { isDark } = useTheme();
  console.log(isDark);
  return (
    <div className="grid  md:grid-cols-2 mb-16 ">
      <div className="  flex flex-col justify-center gap-12">
        <h1
          className={`text-5xl w-2/3 font-bold text-primary  ${
            isDark ? "text-white" : ""
          }`}
        >
          Bring everyone together to build better products.
        </h1>
        <p
          className={`w-2/3 opacity-60 text-primary ${
            isDark ? "text-white" : ""
          } `}
        >
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goats in view.
        </p>
        <div>
          <Link
            to={"/sign-up"}
            className="  text-white py-2 px-5 text-sm rounded-full  bg-orange-500 shadow-lg shadow-orange-500/50  hover:bg-white hover:text-orange-500"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className=" mt-6 flex justify-end">
        <img src={Table} alt="dashboard" />
      </div>
    </div>
  );
};

export default HomeFirst;
