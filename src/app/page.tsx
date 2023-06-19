import Main from "@/components/global/Layout/Main";
import Image from "next/image";
import Conhecer from "./../img/index/conhecer.svg";
import Você from "./../img/index/voce.svg";
import VisualIdentify from "./../img/index/identidade-visual-isaques-estudios.jpg";
import ListToCall from "@/components/global/ListToCall/ListToCall";
import Marketing from "@/img/index/marketing-digital.jpg";
import Programing from "./../img/index/isaques-estúdios-criação-de-site.jpg";

import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Is from "./../img/index/isaques-estudios.webp";
import IsMobile from "./../img/index/isaques-estudios-mobile.webp";
import Section from "@/components/global/Layout/Section";

// export const metadata: Metadata = {
//   title: "Agencia de Publicidade para expandir o marketing da sua Empresa",
//   description:
//     "Nossa agencia de publicidade oferece serviço de criação de sites, sistemas, aplicativos, marketing digital tudo que sua empresa precisa para crescer",
//   keywords: "agencia,publicidade,marketing,sites",
//   alternates: {
//     languages: {
//       "pt-BR": "/",
//     },
//     canonical: "/",
//   },
//   openGraph: {
//     title: "Agencia de Publicidade para expandir o marketing da sua Empresa",
//     description:
//       "Nossa agencia de publicidade oferece serviço de criação de sites, sistemas, aplicativos, marketing digital tudo que sua empresa precisa para crescer",
//     locale: "pt-BR",
//     type: "website",
//   },
// };

export default function Page() {
  return (
    <>
      <Main>
        <div
          id="bg-img-main"
          className={`bg-no-repeat bg-center bg-cover h-screen w-full flex items-end mb-32 mobile:flex-col mobile:items-start mobile:h-full mobile:mb-8 `}
        >
          <div className="pb-[18vw] tablet:pb-[325px] mobile:h-screen mobile:flex mobile:justify-end mobile:flex-col mobile:pb-[75px]">
            <p className="ml-[5%] text-4xl  font-light" id="omundo">
              O mundo precisa
            </p>
            <div className="flex justify-between items-end mx-[5%] mobile:flex-col mobile:items-start">
              <div className="w-[50%] mobile:w-[85%] mobile:mt-4" id="conhecer">
                <Image
                  src={Conhecer}
                  height={400}
                  alt="Conhecer a isaques estúdios"
                  property="true"
                />
              </div>

              <div className="w-[30%] mobile:w-full" id="você">
                <Image src={Você} height={160} alt="Você" property="true" />
              </div>
            </div>
            <p
              className="text-end italic mr-[5%] text-2xl mt-4 font-light mobile:text-start mobile:ml-[5%]"
              id="mostre"
            >
              Mostre a todos o que você tem para oferecer
            </p>
          </div>
        </div>

        <Section>
          <div className="grid grid-cols-6 gap-x-12 my-32 mobile:grid-cols-2 mobile:my-[0]">
            <div id="img1" className="col-span-3">
              <Image src={VisualIdentify} alt="Criação de identidade visual" />
            </div>

            <div className="col-span-3 flex flex-col justify-center mobile:mt-6">
              <h1
                id="visualStudioTitle"
                className="text-7xl tablet:text-5xl font-semibold mobile:text-3xl"
              >
                Agencia de publicidade para empresas
              </h1>
              <ListToCall
                className=""
                id="visualTxt1"
                key={2}
                Title="Destaque sua marca com uma identidade visual única!"
                Paragraph="Destaque sua marca com uma identidade visual marcante! Nossa equipe cria uma imagem forte e consistente, refletindo seus valores e personalidade. Entre em contato para saber mais!"
                ButtonText="Saiba mais"
              />

              <ListToCall
                className=""
                id="visualTxt1"
                key={3}
                Title="Artes criativas para suas redes sociais!"
                Paragraph="Impulsione sua presença nas redes sociais com artes únicas e envolventes! Criamos arte para as redes sociais que capta a atenção do seu público-alvo, refletindo a personalidade da sua marca. Entre em contato para saber mais!"
                ButtonText="Saiba mais"
              />

              <ListToCall
                className=""
                id="visualTxt1"
                key={4}
                Title="Edição de vídeo & imagem"
                Paragraph="Crie conteúdo audiovisual personalizado e de alta qualidade! Nossa equipe utiliza ferramentas avançadas de edição para produzir vídeos e imagens que transmitam sua mensagem de forma clara e envolvente. Entre em contato para saber mais!"
                ButtonText="Saiba mais"
              />
            </div>
          </div>

          <div className="flex mobile:flex-col-reverse">
            <div className="flex flex-col justify-center mobile:mt-10">
              <h2
                id="marketingTitle"
                className="text-7xl tablet:text-5xl font-semibold mobile:text-3xl"
              >
                Agencia de marketing
              </h2>
              <ListToCall
                id="marketingTxt1"
                key={2}
                className=""
                Title="Atraia mais clientes com campanhas!"
                Paragraph="Atraia mais clientes com campanhas personalizadas! Analisamos os resultados em tempo real e ajustamos continuamente para aumentar suas vendas."
                ButtonText="Saiba mais"
              />

              <ListToCall
                id="marketingTxt1"
                key={3}
                className=""
                Title="Aumente sua visibilidade online com SEO!"
                Paragraph="Melhore sua visibilidade online com nosso serviço de otimização de SEO personalizado! Atraia mais visitantes para o seu site e chegue ao topo dos resultados de busca com nossa abordagem eficaz. Comece agora!"
                ButtonText="Saiba mais"
              />

              <ListToCall
                id="marketingTxt1"
                key={4}
                className=""
                Title="Destaque-se no Google com perfil empresarial"
                Paragraph="Destaque seu negócio local no Google! Exiba informações importantes como horários e avaliações de clientes. Atraia mais clientes para seu ponto de atendimento."
                ButtonText="Saiba mais"
              />
            </div>

            <div
              id="imgMarketing"
              className="0%] tablet:flex-auto tablet:w-[200%] mobile:w-[100%]"
            >
              <Image src={Marketing} alt="Criação de identidade visual" />
            </div>
          </div>

          <div className="grid grid-cols-9 gap-x-12 my-32 mobile:grid-cols-2 mobile:my-[0] mobile:flex mobile:flex-col mobile:mb-10">
            <div id="programmingImg" className="col-span-5">
              <Image
                src={Programing}
                alt="Identidade visual isaques estúdios"
              />
            </div>

            <div className="col-span-4 flex flex-col justify-center mobile:mt-10">
              <h2
                id="programmingTitle"
                className="text-7xl tablet:text-5xl font-semibold mobile:text-4xl"
              >
                Alcance novos clientes
              </h2>
              <ListToCall
                id="programmingText1"
                className=""
                key={2}
                Title="Criação de site"
                Paragraph="Nós utilizamos as melhores práticas de desenvolvimento web e estamos sempre atualizados com as tendências mais recentes em tecnologia para garantir que o seu site tenha o máximo desempenho e eficiência."
                ButtonText="Saiba mais"
              />

              <ListToCall
                id="programmingText1"
                className=""
                key={3}
                Title="Criação de sistemas"
                Paragraph="Nossa equipe de desenvolvedores trabalha com as mais recentes tecnologias para criar soluções eficientes e escaláveis, garantindo que o seu sistema esteja sempre atualizado e pronto para atender às suas demandas."
                ButtonText="Saiba mais"
              />

              <ListToCall
                id="programmingText1"
                className=""
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
