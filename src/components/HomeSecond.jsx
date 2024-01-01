import React from "react";
import { useTheme } from "../hooks/useTheme";

const HomeSecond = () => {
  const { isDark } = useTheme();
  return (
    <div className=" grid md:grid-cols-2  mb-28 ">
      <div className="  flex flex-col gap-6">
        <h2
          className={`text-primary text-4xl font-bold w-2/3 ${
            isDark ? "text-white" : ""
          }`}
        >
          What's different about Manage?
        </h2>
        <p
          className={` opacity-60 text-primary w-2/3 ${
            isDark ? "text-white" : ""
          }`}
        >
          Manage provides all the functionality your team needs.without the
          complexity.Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className=" flex flex-col gap-5">
        <div className="flex gap-5 justify-center ">
          <span className=" text-white  px-6 text-md font-bold rounded-full  bg-orange-500 h-10 flex justify-center items-center ">
            01
          </span>
          <div className=" flex flex-col gap-3">
            <h3
              className={`text-primary text-xl font-bold ${
                isDark ? "text-white" : ""
              }`}
            >
              Track company-wide progress
            </h3>
            <p
              className={`opacity-60 text-primary ${
                isDark ? "text-white" : ""
              }`}
            >
              See how your day-to-day tasks fit into the wider vision.Go from
              tracking progress at the milestone level all the way done to the
              smallest of details.Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <span className=" text-white  px-6 text-md font-bold rounded-full  bg-orange-500 h-10 flex justify-center items-center ">
            02
          </span>
          <div className="flex flex-col gap-3">
            <h3
              className={`text-primary text-xl font-bold ${
                isDark ? "text-white" : ""
              }`}
            >
              Advanced built-in reports
            </h3>
            <p
              className={`opacity-60 text-primary ${
                isDark ? "text-white" : ""
              }`}
            >
              Set internal delivery estimates and track progress toward company
              goals.Our customisable dashboard helps you build out the reports
              you need to keep stakeholders informed.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <span className=" text-white  px-6 text-md font-bold rounded-full  bg-orange-500 h-10 flex justify-center items-center ">
            03
          </span>
          <div className="flex flex-col gap-3">
            <h3
              className={`text-primary text-xl font-bold ${
                isDark ? "text-white" : ""
              }`}
            >
              Everything you need in one place
            </h3>
            <p
              className={`opacity-60 text-primary ${
                isDark ? "text-white" : ""
              }`}
            >
              Stop jumping from one service to the another to communicate,store
              files,track tasks and share documents.Manage offers an all-in-one
              team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecond;
