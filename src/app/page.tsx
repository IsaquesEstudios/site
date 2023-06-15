"use client";
import { useEffect } from "react";

import Main from "@/components/global/Layout/Main";
import Image from "next/image";

import First from "./../img/index/isaques-estudios.webp";
import FirstMobile from "./../img/index/isaques-estudios-mobile.webp";

import Conhecer from "./../img/index/conhecer.svg";
import Você from "./../img/index/voce.svg";
import Section from "@/components/global/Layout/Section";

import { gsap } from "gsap";
import DoubleColumns from "@/components/global/DoubleColumns/DoubleCoulmns";

import VisualIdentify from "./../img/index/identidade-visual-isaques-estudios.jpg";
import ListToCall from "@/components/global/ListToCall/ListToCall";
import Marketing from "@/img/index/marketing-digital.jpg";
import Programing from "./../img/index/isaques-estúdios-criação-de-site.jpg";
import H2 from "@/components/global/Title/H2";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Head from "next/head";

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#omundo", { opacity: 1, duration: 1 });
    gsap.to("#conhecer", { opacity: 1, duration: 0.5, delay: 0.6 });
    gsap.to("#você", { opacity: 1, duration: 1, delay: 0.6 });
    gsap.to("#mostre", { opacity: 1, duration: 1, delay: 1.2 });

    gsap.to("#img1", {
      opacity: 1,
      scrollTrigger: {
        start: "20% 30%",
      },
    });

    const t1 = gsap.timeline({
      scrollTrigger: {
        start: "20% 30%",
      },
    });

    t1.to("#visualStudioTitle", { opacity: 1 });
    t1.to("#visualTxt1", { marginLeft: 0, opacity: 1 });

    const t2 = gsap.timeline({
      scrollTrigger: {
        start: "40% 50%",
      },
    });

    t2.to("#imgMarketing", { opacity: 1 });
    t2.to("#marketingTitle", { opacity: 1 });
    t2.to("#marketingTxt1", { paddingLeft: 0, opacity: 1 });

    const t3 = gsap.timeline({
      scrollTrigger: {
        start: "60% 70%",
      },
    });

    t3.to("#programmingTitle", { opacity: 1 });
    t3.to("#programmingImg", { opacity: 1 });
    t3.to("#programmingText1", { marginLeft: 0, opacity: 1 });
  });


  return (
    <>
      <Head>
        <title>Agencia de Publicidade Para Alavancar sua Empresa</title>
        <meta
          name="description"
          content="Nossa agencia de publicidade oferece serviço de criação de sites, sistemas, aplicativos, marketing digital tudo que sua empresa precisa para crescer"
        />

        <link rel="canonical" href="https://isaquesestudios.com" />
        <link
          rel="alternate"
          href="http://isaquesestudios.com"
          hrefLang="pt-br"
        />
      </Head>
      <Main>
        <div
          className={`bg-no-repeat bg-center bg-cover h-screen w-full flex items-end mb-32 bg-[url('/_next/static/media/isaques-estudios.690abb82.webp')] tablet:bg-[url('/_next/static/media/isaques-estudios-mobile.9f3f11cb.webp')] mobile:flex-col mobile:items-start mobile:h-full `}
        >
          <div className="pb-[18vw] tablet:pb-[325px] mobile:h-screen mobile:flex mobile:justify-end mobile:flex-col mobile:pb-[75px]">
            <p className="ml-[5%] text-4xl  font-light opacity-0" id="omundo">
              O mundo precisa
            </p>
            <div className="flex justify-between items-end mx-[5%] mobile:flex-col mobile:items-start">
              <div
                className="w-[50%] opacity-0 mobile:w-[85%] mobile:mt-4"
                id="conhecer"
              >
                <Image
                  src={Conhecer}
                  height={400}
                  alt="Conhecer a isaques estúdios"
                  property="true"
                />
              </div>

              <div className="w-[30%] opacity-0 mobile:w-full" id="você">
                <Image src={Você} height={160} alt="Você" property="true" />
              </div>
            </div>
            <p
              className="text-end italic mr-[5%] text-2xl mt-4 font-light opacity-0 mobile:text-start mobile:ml-[5%]"
              id="mostre"
            >
              Mostre a todos o que você tem para oferecer
            </p>
          </div>
        </div>

        <Section>
          <div className="grid grid-cols-6 gap-x-12 my-32 mobile:grid-cols-2 mobile:my-[0]">
            <div id="img1" className="col-span-3 opacity-0">
              <Image src={VisualIdentify} alt="Criação de identidade visual" />
            </div>

            <div className="col-span-3 flex flex-col justify-center mobile:mt-10">
              <H2 id="visualStudioTitle" className="opacity-0">
                Sua agencia de publicidade
              </H2>
              <ListToCall
                className="ml-10 opacity-0"
                id="visualTxt1"
                key={2}
                Title="Destaque sua marca com uma identidade visual única!"
                Paragraph="Destaque sua marca com uma identidade visual marcante! Nossa equipe cria uma imagem forte e consistente, refletindo seus valores e personalidade. Entre em contato para saber mais!"
                ButtonText="Saiba mais"
              />

              <ListToCall
                className="ml-10 opacity-0"
                id="visualTxt1"
                key={3}
                Title="Artes criativas para suas redes sociais!"
                Paragraph="Impulsione sua presença nas redes sociais com artes únicas e envolventes! Criamos arte para as redes sociais que capta a atenção do seu público-alvo, refletindo a personalidade da sua marca. Entre em contato para saber mais!"
                ButtonText="Saiba mais"
              />

              <ListToCall
                className="ml-10 opacity-0"
                id="visualTxt1"
                key={4}
                Title="Vídeo & Imagem"
                Paragraph="Crie conteúdo audiovisual personalizado e de alta qualidade! Nossa equipe utiliza ferramentas avançadas de edição para produzir vídeos e imagens que transmitam sua mensagem de forma clara e envolvente. Entre em contato para saber mais!"
                ButtonText="Saiba mais"
              />
            </div>
          </div>

          <div className="flex mobile:flex-col-reverse">
            <div className="flex flex-col justify-center mobile:mt-10">
              <H2 id="marketingTitle" className="opacity-0">
                Agencia de marketing que você precisa
              </H2>
              <ListToCall
                id="marketingTxt1"
                key={2}
                className="opacity-0 pl-20"
                Title="Atraia mais clientes com campanhas!"
                Paragraph="Atraia mais clientes com campanhas personalizadas! Analisamos os resultados em tempo real e ajustamos continuamente para aumentar suas vendas."
                ButtonText="Saiba mais"
              />

              <ListToCall
                id="marketingTxt1"
                key={3}
                className="opacity-0 pl-20"
                Title="Aumente sua visibilidade online com SEO!"
                Paragraph="Melhore sua visibilidade online com nosso serviço de otimização de SEO personalizado! Atraia mais visitantes para o seu site e chegue ao topo dos resultados de busca com nossa abordagem eficaz. Comece agora!"
                ButtonText="Saiba mais"
              />

              <ListToCall
                id="marketingTxt1"
                key={4}
                className="opacity-0 pl-20"
                Title="Destaque-se no Google com perfil empresarial"
                Paragraph="Destaque seu negócio local no Google! Exiba informações importantes como horários e avaliações de clientes. Atraia mais clientes para seu ponto de atendimento."
                ButtonText="Saiba mais"
              />
            </div>

            <div
              id="imgMarketing"
              className="opacity-0 tablet:flex-auto tablet:w-[200%] mobile:w-[100%]"
            >
              <Image src={Marketing} alt="Criação de identidade visual" />
            </div>
          </div>

          <div className="grid grid-cols-9 gap-x-12 my-32 mobile:grid-cols-2 mobile:my-[0]">
            <div id="programmingImg" className="col-span-5 opacity-0">
              <Image
                src={Programing}
                alt="Identidade visual isaques estúdios"
              />
            </div>

            <div className="col-span-4 flex flex-col justify-center mobile:mt-10">
              <h1
                id="programmingTitle"
                className={`text-4xl font-semibold mb-4 mobile:text-2xl opacity-0`}
              >
                Criação de sites e sistemas para sua empresa
              </h1>
              <ListToCall
                id="programmingText1"
                className="opacity-0 ml-20"
                key={2}
                Title="Criação de site"
                Paragraph="Nós utilizamos as melhores práticas de desenvolvimento web e estamos sempre atualizados com as tendências mais recentes em tecnologia para garantir que o seu site tenha o máximo desempenho e eficiência."
                ButtonText="Saiba mais"
              />

              <ListToCall
                id="programmingText1"
                className="opacity-0 ml-20"
                key={3}
                Title="Criação de sistemas"
                Paragraph="Nossa equipe de desenvolvedores trabalha com as mais recentes tecnologias para criar soluções eficientes e escaláveis, garantindo que o seu sistema esteja sempre atualizado e pronto para atender às suas demandas."
                ButtonText="Saiba mais"
              />

              <ListToCall
                id="programmingText1"
                className="opacity-0 ml-20"
                key={4}
                Title="Landing Page"
                Paragraph="Nós criamos landing pages altamente eficazes que convertem visitantes em clientes. Nossa equipe de especialistas em design e desenvolvimento trabalha em conjunto para criar páginas que ofereçam uma experiência de usuário excepcional e destaquem os pontos fortes do seu produto ou serviço."
                ButtonText="Saiba mais"
              />
            </div>
          </div>
        </Section>
      </Main>
    </>
  );
}
