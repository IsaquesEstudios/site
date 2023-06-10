"use client";

import "@splidejs/splide/css/sea-green";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import DaRoça from "./../../../img/wordpress/daroçabiscoitos-website-wordpress.jpg";
import Prospector from "./../../../img/wordpress/prospector-website-criação.jpg";
import Reina from "./../../../img/wordpress/reina-print-criação-de-website.jpg";
import Blog from "./../../../img/wordpress/simcompany-criação-de-blog-wordpress.jpg";

import Image from "next/image";
import Link from "next/link";

export default function AutoSlide() {
  return (
    <Splide
      options={{
        autoplay: true,
        perPage: 3,
        perMove: 1,
        type: "loop",
        speed: 1000,
        breakpoints: {
          1100: {
            perPage: 2
          },
          768: {
            perPage: 1
          }
        }
      }}
    >
      <SplideSlide>
        <Link href="https://darocabiscoitos.com.br/" target="_blank">
          <Image
            src={DaRoça}
            alt="Criação de site daroça biscoitos - Isaques Estúdios"
          />
        </Link>
      </SplideSlide>
      <SplideSlide>
        <Link href="https://reinaprint.com.br/" target="_blank">
          <Image
            src={Reina}
            alt="Criação de loja reinaprint - Isaques Estúdios"
          />
        </Link>
      </SplideSlide>
      <SplideSlide>
        <Link href="https://blog.simcompany.com.br/" target="_blank">
          <Image
            src={Blog}
            alt="Criação de blog simcompany - Isaques Estúdios"
          />
        </Link>
      </SplideSlide>
      <SplideSlide>
        <Link href="https://prospectorcomercial.com.br/" target="_blank">
          <Image
            src={Prospector}
            alt="Criação de site institucional - Isaques Estúdios"
          />
        </Link>
      </SplideSlide>
    </Splide>
  );
}
