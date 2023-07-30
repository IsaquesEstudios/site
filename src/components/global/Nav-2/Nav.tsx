"use client";
import { useState } from "react";
import NavItem from "./NavItem";

import "./../Nav/style.css";

export default function Nav2() {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <>
      <div
        className="fixed top-8 right-[5%] z-50 h-8 w-10 mobile:flex flex-col justify-between cursor-pointer hidden"
        onClick={() => {
          setCheckbox(!checkbox);
        }}
      >
        <div className="relative h-8 w-full">
          <input
            id="checkboxMenu"
            type="checkbox"
            checked={checkbox}
            className="fixed -top-10"
          />
          <div
            id="lineCheckBox"
            className="bg-white-900 h-1 w-10 rounded-xl absolute "
          />
          <div
            id="lineCheckBox"
            className="bg-white-900 h-1 w-10 rounded-xl absolute top-3"
          />
          <div
            id="lineCheckBox"
            className="bg-white-900 h-1 w-10 rounded-xl absolute top-6"
          />
        </div>
      </div>

      <nav
        className={`fixed top-0 w-full h-[60px] flex justify-center items-center backdrop-blur-sm mobile:h-screen mobile:bg-black-800 mobile:justify-start mobile:items-start ${
          !checkbox && "hidden"
        }`}
      >
        <ul
          className={`flex items-center mobile:flex-col gap-y-1 mobile:items-start mobile:mt-20 mobile:w-full`}
        >
          <NavItem key={1} LinkString="/">
            Início
          </NavItem>
          <NavItem key={2} LinkString="/marketing/social-media">
            Social Media{" "}
          </NavItem>
          <NavItem key={3} LinkString="/trafego-pago">
            Tráfego Pago
          </NavItem>
          <NavItem key={4} LinkString="/">
            Wordpress
          </NavItem>
          <NavItem key={5} LinkString="/">
            Blog
          </NavItem>
          <NavItem key={6} LinkString="/">
            Contato
          </NavItem>
        </ul>
      </nav>
    </>
  );
}
