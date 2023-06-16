"use client";

import Logo from "./Logo";

import WhiteLogo from "./../../../img/global/isaques-estúdios-logo-letra-branco.png";
import Links from "./Links";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timeLine = gsap.timeline();

    timeLine.to("#nav", { width: "100%", transition: 1, delay: 1 });
    timeLine.to("#borderNav", { width: "100%", transition: 0.5, delay: 0 });
    timeLine.to("#contentNav", { display: "flex", delay: 0 });
    timeLine.to("#contentNav", { opacity: 1, transition: 0.5 });
  }, []);

  return (
    <>
      <RxHamburgerMenu
        onClick={() => {
          setOpen(!open);
        }}
        size={30}
        className="fixed top-6 right-10 z-50 hidden mobile:block"
      />
      <nav
        id="nav"
        className={`w-full h-16 fixed top-0 z-20 bg-transparent backdrop-blur-sm flex justify-center items-center mobile:h-screen mobile:bg-black-800  
        flex-col ${
          open && "mobile:hidden"
        } mobile:max-w-[80%] mobile:items-start mobile:justify-start`}
      >
        <div
          id="contentNav"
          className=" opacity-0 items-center justify-between w-full  max-w-[90%] m-auto"
        >
          <div className="mobile:hidden">
            <Logo src={WhiteLogo} alt="Logo isaques estúdios" height={24} />
          </div>

          <Links />
        </div>
      </nav>
      <div
        id="borderNav"
        className="h-[0.5px] w-0 bg-gradient-to-r from-black-800 via-black-600 to-black-800 fixed top-16 mobile:hidden z-20"
      />
    </>
  );
}
