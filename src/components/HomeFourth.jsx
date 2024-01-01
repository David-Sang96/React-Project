import React from "react";
import { Link } from "react-router-dom";

const HomeFourth = () => {
  return (
    <div className=" bg-orange-600 flex justify-between items-center p-14 rounded-t-lg l">
      <p className=" text-white text-5xl w-1/2 ">
        Simplify how your team works today.
      </p>
      <div>
        <Link
          to={"sign-up"}
          className="  text-orange-500 py-2 px-5 text-sm rounded-full  bg-white shadow-lg shadow-orange-500/50 "
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomeFourth;
