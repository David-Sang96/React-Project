import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import NavBar from "../components/NavBar";
import { useTheme } from "../hooks/useTheme";
import "./style.css";

const Layout = () => {
  const location = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.add("bg-primary");
    } else {
      body.classList.remove("bg-primary");
    }
  }, [isDark]);

  return (
    <div className={`${isDark ? "bg-primary" : ""}`}>
      <NavBar />
      <SwitchTransition>
        <CSSTransition
          timeout={200}
          classNames={"fade"}
          key={location.pathname}
        >
          <div className="md:max-w-[1250px] m-auto">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Layout;
