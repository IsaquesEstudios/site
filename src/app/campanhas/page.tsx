// 'use client'
import Image from "next/image";

import Section from "@/components/global/Layout/Section";
import Main from "@/components/global/Layout/Main";
import Button from "@/components/global/Button/Button";

import SearchGoogle from "./../../img/trafficManagement/google-ads.gif";
import Phone from "./../../img/trafficManagement/marketing-nas-redes-sociais.gif";
import CheckedList from "./../../components/global/List/CheckedList";
import { IconText } from "@/components/global/IconText/IconText";

import { BsClockHistory, BsGraphUpArrow } from "react-icons/bs";
import {
  MdOutlineAppRegistration,
  MdSell,
  MdOutlineScreenSearchDesktop,
} from "react-icons/md";

import { GiBuyCard, GiThreeFriends } from "react-icons/gi";
import { IoStorefrontOutline } from "react-icons/io5";

import Contact from "./../../img/trafficManagement/ao-contratar-isaques-estúdios.png";

import H2 from "@/components/global/Title/H2";

export default function SocialMedia() {
  return (
    <>
      <title>
        Campanhas de marketing na internet - Tenha seu site no topo das
        pesquisas e em todas as redes sociais
      </title>
      <meta
        name="description"
        content="Campanhas online no google, facebook, youtube, instagram, tenha seu site sempre no topo, atraindo mais clientes para seu site."
      />

      <Main>
        <Section>
          <div className="flex pt-40 tablet:flex-col-reverse">
            <div className="flex justify-center flex-col mr-20 tablet:mr-0">
              <h1 className="text-4xl mb-4 font-bold leading-[3rem] tablet:mt-10 tablet:text-3xl mobile:text-2xl mobile:mb-1">
                <span>Aumente</span> o potencial de vendas do seu negócio
                atraindo <span>10x mais clientes</span>
              </h1>
              <p className="my-4 mobile:my-2">
                Ajudamos a sua empresa a multiplicar as vendas por direcionar
                seus anúncios para as pessoas certas nas principais plataformas
                da internet: <span>Google, Facebook, instagram</span> e{" "}
                <span>youtube.</span>
              </p>

              <p className="mb-12 mobile:mb-6">
                Clique no botão abaixo para entrar em contato com a nossa equipe
                e garanta um benefício exlusivo
              </p>
              <Button>Falar com um consultor pelo whatsapp</Button>
            </div>
            <div className="grow-1 flex-auto w-full">
              <Image
                src={SearchGoogle}
                alt="Melhorar minhas pesquisa no google"
              />
            </div>
          </div>

          <div className="text-center mt-32 max-w-[70%] m-auto mobile:max-w-[90%]">
            <H2 className="mb-4">
              <span>Aumente</span> o potencial de <span>vendas</span> do seu
              negócio atraindo <span>mais clientes</span>
            </H2>

            <p>
              Ajudamos a sua empresa a aumentar as vendas com estratégias de
              marketing e anúncios nas principais plataformas da internet:
              google, facebook, instagram, youtube e tiktok
            </p>

            <p>
              Clique no botão abaixo para entrar em contato com a nossa equipe e
              garanta um benefício exclusivo!
            </p>
          </div>

          <div className="flex mt-32 mobile:flex-col mobile:mt-0">
            <div className="flex-2">
              <Image src={Phone} alt="divulgações nas redes sociais" />
            </div>

            <div className="flex-1 mobile:mt-10">
              <H2>
                Deixe sua empresa <span>mais visível</span> e fácil de ser
                encontrada
              </H2>
              <p className="mb-4 mt-2">para quem...</p>
              <ul>
                <CheckedList text="É prestador de serviços" />
                <CheckedList text="É dono de negócio local" />
                <CheckedList text="É dono de e-commerce" />
                <CheckedList text="Precisa adquirir novos clientes" />
                <CheckedList text="Deseja vender mais através da internet" />
              </ul>
            </div>
          </div>

          <div className="mt-20 mobile:mt-0">
            <H2 className="text-center">
              <span>Aumente</span> o potencial de <span>vendas</span>
              <br /> do seu negócio atraindo <span>mais clientes!</span>
            </H2>

            <div className="grid pt-20 grid-cols-3 my-14 mobile:grid-cols-1 mobile:my-10 mobile:gap-y-5">
              <IconText
                title="Tráfego"
                text="Para trazer uma campanha de marketing de sucesso e sem jogar dinheiro fora, você precisa ter experiência e habilidade de geestão de tráfego."
              >
                <BsGraphUpArrow className="text-yellow-800 mr-1" size="80" />
              </IconText>

              <IconText
                title="Tempo"
                text="Para o sucesso do negócio, o seu tempo deve ser totalmente dedicado a gestão da sua empresa, não para aprender tráfego, analisar métricas e até mesmo subir campanhas sem experiência para isso."
              >
                <BsClockHistory className="text-yellow-800 mr-1" size="80" />
              </IconText>

              <IconText
                title="Tráfego"
                text="Você não precisa perder tempo e dinheiro para criar estratégiaas que ainda não foram testadas, deixe isso com quem já testou e sabe o que funciona nesse mercado."
              >
                <MdOutlineAppRegistration
                  className="text-yellow-800 mr-1"
                  size="80"
                />
              </IconText>
            </div>
          </div>
        </Section>

        <div
          className="mt-40 bg-center bg-no-repeat bg-cover w-full h-[400px] flex items-center"
          style={{ backgroundImage: `url(${Contact.src})` }}
        >
          <p className="ml-[5%] text-[2.25rem] font-bold mobile:text-center">
            Ao <span>contratar</span> a <span>Isaques Estúdios</span>
            <br /> você terá...
          </p>
        </div>

        <Section>
          <div className="grid grid-cols-5 gap-x-5 pt-40 pb-20 mobile:grid-cols-1 mobile:gap-x-0 mobile:gap-y-6 mobile:pt-20">
            <IconText text="Ter seus anúncios para o publico correto e no momento de compra.">
              <GiBuyCard className="text-yellow-800" size="3.5rem" />
            </IconText>
            <IconText text="Alcançar novos clientes e aumentar as vendas.">
              <GiThreeFriends className="text-yellow-800" size="3.5rem" />
            </IconText>
            <IconText text="Crescimento no número de vendas.">
              <MdSell className="text-yellow-800" size="3.5rem" />
            </IconText>
            <IconText text="Estar presente no momento que seu cliente busca o seu serviço.">
              <MdOutlineScreenSearchDesktop
                className="text-yellow-800"
                size="3.5rem"
              />
            </IconText>
            <IconText text="Estar atualizado sobre o mercado e oferta dos concorrentes.">
              <IoStorefrontOutline className="text-yellow-800" size="3.5rem" />
            </IconText>
          </div>
        </Section>
      </Main>
    </>
  );
}
