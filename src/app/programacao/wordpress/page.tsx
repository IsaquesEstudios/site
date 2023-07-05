// 'use client'
import Image from "next/image";

import Bg from "./../../../img/wordpress/bg-site-wordpress-is.webp";

import Particula from "./../../../img/wordpress/isaques-estudios-particulas.webp";

import H2 from "@/components/global/Title/H2";
import Wordpress from "./../../../img/wordpress/sites-em-wordpress.png";

import Chart from "./../../../img/wordpress/alavanque-seu-site-em-wp.webp";
import H3 from "@/components/global/Title/H3";
import Section from "@/components/global/Layout/Section";
import Button from "@/components/global/Button/Button";

import Benefits from "@/components/global/Topics/Benefits";
import Logos from "./../../../img/wordpress/integração-do-google.jpg";

import AutoSlideWordpress from "@/components/global/Slide/AutoSlideWordpress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sites em wordpress - Tenha seu site pronto em wordpress",
  description:
    "Sites em wordpress, landing pages, e-commerce, blog e muito mais, profissionais em wordpress estão prontos para apresentar os valores",
  keywords: "agencia, sites, wordpress, landingpage, blog, valores",
  alternates: {
    languages: {
      "pt-BR": "https://isaquesestudios.com/wordpress",
    },
    canonical: "https://isaquesestudios.com/wordpress",
  },
};
export default function Page() {
  return (
    <main>
      <div
        className="w-full bg-center bg-no-repeat bg-cover flex items-center justify-center pt-32 mb-32 mobile:mb-10 mobile:pt-20" 
        style={{ backgroundImage: `url('${Bg.src}')` }}
      >
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-7xl font-semibold text-center mb-4 mobile:text-5xl">
            Sites em wordpress
          </h1>
          <div className="w-4/6 mt-7 mobile:w-5/6" id="opacity">
            <Image src={Wordpress} alt="sites em wordpress" />
          </div>
          <H2 className="text-center text-7xl mobile:text-5xl">Porque devo ter um site em wordpress?</H2>
          <p className="max-w-[60%] text-center mobile:max-w-[80%] min-mobile:max-w-[90%]">
            Porque você precisa despertar o poder do seu negócio no mundo
            digital! Aumente sua visibilidade, conquiste novos clientes e
            impulsione seus resultados com um website em wordpress. Estabeleça
            sua presença online de forma impactante e alcance o sucesso
            absoluto. Não deixe essa oportunidade passar: invista em um website
            de qualidade e abra as portas para um novo nível de sucesso!
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-2 gap-x-10 mobile:grid-cols-1 mobile:mt-32">
          <div>
            <Image
              src={Chart}
              alt="Impulsione seu negócio com sites prontos em wordpress"
            />
          </div>

          <div className="flex justify-center items-start flex-col mobile:mt-8">
            <h3 className="text-5xl font-semibold">
            E-commerce, blog ou site institucional em wordpress
            </h3>
            <p className="mt-4">
              Ter um e-commerce, blog ou site institucional no WordPress pode
              ajudar a alcançar um público maior, expandir sua marca, aumentar
              as vendas e fornecer uma plataforma interativa para se envolver
              com os visitantes. O WordPress oferece uma ampla gama de recursos,
              temas e plugins que podem ser adaptados às necessidades
              específicas do seu negócio. Além disso, é uma plataforma de código
              aberto com uma comunidade ativa de desenvolvedores freelancers.
            </p>

            <Button className="w-[360px] mt-4 mobile:w-full mobile:mt-4 ">
              Fale com um profissional
            </Button>
          </div>
        </div>
      </Section>

      <div
        className="min-h-screen w-full bg-center bg-cover flex flex-col items-center justify-center text-center h-full px-[15%] min-[1600px]:m-auto max-w-[1920px] mobile:px-[5%]"
        style={{ backgroundImage: `url('${Particula.src}')` }}
      >
        <h3 className="text-5xl font-semibold">
        Uma das melhores hospedagens para sites em wordpress
        </h3>
        <p>
          Nossa hospedagem especializada para WordPress e aproveite um
          desempenho e confiabilidade excepcionais para o seu site. Nossa
          hospedagem é a escolha certa para garantir que seu site em WordPress
          seja rápido, seguro e tenha um tempo de atividade consistente. Com
          recursos otimizados, suporte técnico especializado e um painel de
          controle intuitivo, nossa hospedagem para WordPress torna a gestão do
          seu site fácil e eficiente. Não comprometa a qualidade - escolha a
          nossa hospedagem para WordPress e impulsione o sucesso do seu site
          agora mesmo!
        </p>
      </div>

      <Section className="my-[120px] mobile:my-[75px]">
        <div className="text-center mobile:text-start">
          <h4 className="text-5xl font-semibold mb-4 mobile:mb-0">
            Principais vantagens de usar WordPress
          </h4>

          <h5 className="text-2xl font-medium mb-20 mobile:mb-10">
            Separamos seis benefícios de usar WordPress
          </h5>

          <div className="grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-10 mobile:grid-cols-2 mobile:gap-x-4 mobile:gap-y-4 min-mobile:grid-cols-1">
            <Benefits
              title="Custo-benefício:"
              description={[
                "O WordPress é uma plataforma de baixo custo, permitindo que você crie um site profissional mesmo possuindo uma verba limitada.",
              ]}
            />
            <Benefits
              title="Facilidade de uso:"
              description={[
                "O WordPress é um sistema de gerenciamento de conteúdo intuitivo e fácil de usar, com uma interface amigável que permite que o cliente possa atualizar o conteúdo do seu site mesmo sem ter conhecimento de programação.",
              ]}
            />
            <Benefits
              title="SEO friendly:"
              description={[
                "Sistema altamente otimizado para os motores de busca, tornando mais fácil para os clientes encontrarem o site nos resultados de pesquisa.",
              ]}
            />
            <Benefits
              title="Segurança:"
              description={[
                "O WordPress é uma plataforma segura, com constantes atualizações de segurança para proteger o site contra hackers e malwares.",
              ]}
            />
            <Benefits
              title="E-commerce:"
              description={[
                "O WordPress é uma plataforma eficaz para a criação de lojas online, permitindo que o cliente venda produtos ou serviços diretamente do seu site.",
              ]}
            />
            <Benefits
              title="Função de blog:"
              description={[
                "Uma excelente plataforma para criação de blogs, com recursos de postagem e gerenciamento de conteúdo especialmente projetados para blogueiros.",
              ]}
            />
          </div>
        </div>
      </Section>

      <div className="bg-center bg-cover text-center px-[10%] my-[75px] flex justify-center flex-col tablet:px-[5%] mobile:px-[0%]">
        <h5 className=" text-4xl font-semibold  mb-[40px] text-center mobile:max-w-[90%] mobile:text-2xl mobile:mb-[0px] m-auto">
          Veja alguns dos nossos trabalhos
        </h5>
        <AutoSlideWordpress />
      </div>

      <div>
        <div>
          <Image src={Logos} alt="integração do google com o site" />
        </div>

        <div className="text-center w-full h-full px-[5%] min-[1600px]:m-auto max-w-[1920px] mobile:mb-24">
          <H2 className={"mb-4"}>
            Otimize sua presença online com a integração perfeita do seu site
            com as ferramentas do Google
          </H2>

          <p className="my-4">
            Para melhorar sua presença online e alcançar mais clientes em
            potencial, é fundamental integrar seu site com as ferramentas do
            Google, como o{" "}
            <span className="text-yellow-800">
              Google Analytics, Google Search, Google Negócios e Tag Manager.
            </span>{" "}
            No entanto, a integração pode ser complicada e demorada se você não
            tem experiência técnica.
          </p>
          <p>
            Nossa equipe de especialistas pode ajudar a garantir que a
            integração do seu site com as ferramentas do Google seja perfeita e
            sem falhas. Com nossos serviços de integração, você terá insights
            precisos sobre seu público-alvo, poderá entender melhor o desempenho
            do seu site e obter melhores resultados online. Entre em contato
            conosco hoje mesmo para saber mais sobre como podemos ajudá-lo a
            integrar seu site com as ferramentas do Google.
          </p>

          <Button
            key={2}
            className="w-[520px] mt-6 mobile:w-[340px] min-mobile:w-[320px]"
          >
            Saiba mais sobre as ferramentas do google
          </Button>
        </div>
      </div>
    </main>
  );
}
