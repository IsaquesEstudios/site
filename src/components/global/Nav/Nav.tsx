"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./style.css";

export default function Nav() {
  const [designe, setDesigne] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [programming, setProgramming] = useState(false);
  const [checkbox, setCheckbox] = useState(false);

  function setDesigneFunction() {
    setDesigne(!designe);
    setMarketing(false);
    setProgramming(false);
  }

  function setMarketingFunction() {
    setDesigne(false);
    setMarketing(!marketing);
    setProgramming(false);
  }

  function setProgrammingFunction() {
    setDesigne(false);
    setMarketing(false);
    setProgramming(!programming);
  }

  return (
    <>
      <div
        className="fixed top-8 right-[5%] z-50 h-8 w-10 flex flex-col justify-between cursor-pointer"
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
            className="bg-white-900 h-1 w-10 rounded-xl absolute "
          />
          <div
            id="lineCheckBox"
            className="bg-white-900 h-1 w-10 rounded-xl absolute "
          />
        </div>
      </div>

      <nav
        className={`h-screen w-full flex items-center justify-center fixed top-0 bg-black-800 ${
          !checkbox && "hidden"
        } `}
      >
        <ul
          id="menuList"
          className="overflow-y-scroll w-full  overflow-x-hidden flex flex-col relative ml-[5%] gap-y-10"
        >
          <li className="pt-[40%]">
            <Link
              className="text-7xl font-semibold text-black-200 hover:text-black-100 transition"
              href="/"
              onClick={() => {
                setCheckbox(!checkbox);
              }}
            >
              Início
            </Link>
          </li>

          <li>
            <Link
              className="text-7xl font-semibold  text-black-200 hover:text-black-100 transition"
              href="undefined"
              onMouseOver={() => {
                setDesigneFunction();
              }}
            >
              Designe
            </Link>
          </li>

          <li>
            <Link
              className="text-7xl font-semibold  text-black-200 hover:text-black-100 transition hover:mr-10"
              href="undefined"
              onMouseOver={() => {
                setMarketingFunction();
              }}
            >
              Marketing
            </Link>
          </li>

          <li>
            <Link
              className="text-7xl font-semibold  text-black-200 hover:text-black-100 transition"
              href="undefined"
              onMouseOver={() => {
                setProgrammingFunction();
              }}
            >
              Programação
            </Link>
          </li>

          <li className="pb-[40%]">
            <Link
              className="text-7xl font-semibold  text-black-200 hover:text-black-100 transition"
              href="undefined"
              onClick={() => {
                setCheckbox(!checkbox);
              }}
            >
              Contato
            </Link>
          </li>
        </ul>
        <div className="h-screen w-full flex items-center ml-[10%]">
          <ul
            className={` flex flex-col gap-y-6 ${
              !designe === true ? "hidden" : "block"
            }`}
          >
            <li className="text-4xl font-bold">Designe</li>
            <li>
              <Link
                className="text-5xl"
                href="/designe/criacao-de-identidade-visual"
                onClick={() => {
                  setCheckbox(!checkbox);
                }}
              >
                Identidade Visual
              </Link>
            </li>
            {/* <li>
              <Link
                className="text-5xl"
                href="/designe/edicao-de-video"
                onClick={() => {
                  setCheckbox(!checkbox);
                }}
              >
                Edição de Vídeo
              </Link>
            </li> */}
            {/* <li>
              <Link
                className="text-5xl"
                href="/designe/designe-digital"
                onClick={() => {
                  setCheckbox(!checkbox);
                }}
              >
                Designe Digital
              </Link>
            </li> */}
            {/* <li>
              <Link
                className="text-5xl"
                href="/designe/video-institucional"
                onClick={() => {
                  setCheckbox(!checkbox);
                }}
              >
                Vídeos Institucionais
              </Link>
            </li> */}
          </ul>

          <ul
            className={`flex flex-col gap-y-6 ${
              !marketing === true ? "hidden" : "block"
            }`}
          >
            <li className="text-4xl font-bold">Marketing</li>
            <li>
              <Link
                href="/marketing/social-media"
                className="text-5xl"
                onClick={() => {
                  setCheckbox(!checkbox);
                }}
              >
                Social Media
              </Link>
            </li>
            <li>
              <Link
                href="/marketing/trafego-pago"
                className="text-5xl"
                onClick={() => {
                  setCheckbox(!checkbox);
                }}
              >
                Tráfego Pago
              </Link>
            </li>
            {/* <li>
              <Link
                href="undefined"
                className="text-5xl"
                onClick={() => {
                  setCheckbox(!checkbox);
                }}
              >
                Otimização de SEO
              </Link>
            </li> */}
          </ul>

          <ul
            className={`flex flex-col gap-y-6 ${
              !programming === true ? "hidden" : "block"
            }`}
          >
            <li className="text-4xl font-bold">Programação</li>
            {/* <li>
              <Link
                href="undefined"
                className="text-5xl"
                onClick={() => {
                  setCheckbox(!checkbox);
                }}
              >
                Site Profissional
              </Link>
            </li> */}
            <li>
              <Link
                href="programacao/wordpress"
                className="text-5xl"
                onClick={() => {
                  setCheckbox(!checkbox);
                }}
              >
                Site wordpress
              </Link>
            </li>
            {/* <li>
              <Link
                href="undefined"
                className="text-5xl"
                onClick={() => {
                  setCheckbox(!checkbox);
                }}
              >
                Sistemas
              </Link>
            </li> */}
            {/* <li>
              <Link
                href="undefined"
                className="text-5xl"
                onClick={() => {
                  setCheckbox(!checkbox);
                }}
              >
                Aplicativos
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}
