import React from "react";
import { Link } from "react-router-dom";
import ALi from "../assets/ali-bravo.png";
import Anisha from "../assets/anisha-li.png";
import Richard from "../assets/richard-watts.png";
import { useTheme } from "../hooks/useTheme";

const HomeThird = () => {
  const { isDark } = useTheme();
  return (
    <div className=" flex flex-col gap-16 justify-center items-center mb-40">
      <h2
        className={`text-4xl w-2/3 font-bold text-primary  text-center ${
          isDark ? "text-white" : ""
        }`}
      >
        What they've said
      </h2>
      <div className=" flex gap-5 ">
        <div
          className={`flex flex-col  items-center gap-4 border border-1 p-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ${
            isDark
              ? "border-primary shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              : ""
          }`}
        >
          <img src={Anisha} alt="" className="w-16" />
          <span
            className={`font-bold text-primary ${isDark ? "text-white" : ""}`}
          >
            Anisha Li
          </span>
          <p
            className={`opacity-60 text-primary ${isDark ? "text-white" : ""}`}
          >
            "It has supercharged our team's workflow.the maintain visibility on
            larger milestones at all times keeps everyone motivate."
          </p>
        </div>
        <div
          className={`flex flex-col  items-center gap-4 border border-1 p-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ${
            isDark
              ? "border-primary shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              : ""
          }`}
        >
          <img src={ALi} alt="" className="w-16" />
          <span
            className={`font-bold text-primary ${isDark ? "text-white" : ""}`}
          >
            Ali Bravo
          </span>
          <p
            className={`opacity-60 text-primary ${isDark ? "text-white" : ""}`}
          >
            "We've been able to cancel so many other subscriptions since using
            Manage.There is no more cross-channel confusion and everyone is much
            more focused."
          </p>
        </div>
        <div
          className={`flex flex-col  items-center gap-4 border border-1 p-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ${
            isDark
              ? "border-primary shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              : ""
          }`}
        >
          <img src={Richard} alt="" className="w-16" />
          <span
            className={`font-bold text-primary ${isDark ? "text-white" : ""}`}
          >
            Richard Watts
          </span>
          <p
            className={`opacity-60 text-primary ${isDark ? "text-white" : ""}`}
          >
            "Manage allows us to provide structure and provide keeps us
            organized and focused.I can't stop recording them to everyone I talk
            to!"
          </p>
        </div>
      </div>
      <div>
        <Link
          to={"/sign-up"}
          className="  text-white py-2 px-5 text-sm rounded-full  bg-orange-500 shadow-lg shadow-orange-500/50  hover:bg-white hover:text-orange-500"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomeThird;
