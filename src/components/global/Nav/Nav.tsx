"use client";

import Logo from "./Logo";

import WhiteLogo from "./../../../img/global/isaques-estúdios-logo-letra-branco.png";
import Links from "./Links";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Nav() {
  useEffect(() => {
    const timeLine = gsap.timeline();

    timeLine.to("#nav", { width: "100%", transition: 1, delay: 1 });
    timeLine.to("#borderNav", { width: "100%", transition: 0.5, delay: 0 });
    timeLine.to("#contentNav", { display: "flex", delay: 0 });
    timeLine.to("#contentNav", { opacity: 1, transition: 0.5 });
  }, []);

  return (
    <>
      <nav
        id="nav"
        className="w-0 h-16 fixed top-0 z-20 bg-transparent  flex justify-between px-[5%] items-center backdrop-blur-[5px] mobile:h-screen mobile:bg-black-800 opacity-95"
      >
        <div
          id="contentNav"
          className="hidden  opacity-0 justify-between items-center w-full "
        >
          <div className="mobile:hidden">
          <Logo src={WhiteLogo} alt="Logo isaques estúdios" height={24} />
          </div>

          <Links />
        </div>
      </nav>
      <div
        id="borderNav"
        className="h-[0.5px] w-0 bg-gradient-to-r from-black-800 via-black-600 to-black-800 fixed top-16"
      />
    </>
  );
}
