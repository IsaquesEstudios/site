import Main from "@/components/global/Layout/Main";
import Section from "@/components/global/Layout/Section";

import "./style.css";
import PlayerBackground from "@/components/social-media/PlayerBackground";
import H2 from "@/components/global/Title/H2";
import H3 from "@/components/global/Title/H3";
import Cam from "@/components/global/3d/cam";

import Empresas from "./../../../img/social-media/media.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <Main>
      <PlayerBackground />

      <Section className="flex justify-center items-center text-center absolute top-0 mobile:hidden">
        <div id="content1">
          <h1 className="text-7xl font-semibold tablet:text-5xl">Social Media para empresas</h1>
          <p className="max-w-[80%] m-auto mt-4">
            Contratar um Social Media para sua empresa oferece diversas
            vantagens, como estabelecer uma presença online destacada, construir
            uma marca sólida, engajar efetivamente o público, expandir o alcance
            do público-alvo e otimizar os resultados por meio de análise de
            dados. Não perca tempo e aproveite os benefícios de ter um
            especialista em mídias sociais ao seu lado!
          </p>
        </div>
      </Section>

      <Section
        id="SocialMediaEmpresas"
        className={`grid grid-cols-2 min-h-[100vh] items-center my-10 bg-${Empresas.src} mobile:grid-cols-1`}
      >
        <div>
          <h2 className="text-7xl font-semibold tablet:text-5xl">
            Pessoas estão te procurando, mas não acham
          </h2>
          <p>
            Pesquisas apontam sobre o número de pessoas que procura saber mais
            pelas redes sociais de clientes, antes de fechar um serviço, tem
            crescido e tende a crescer muito mais nos próximos anos
          </p>
        </div>
      </Section>

      <Section className="min-h-[100vh] flex items-center justify-center flex-col tablet:mb-20">
        <h3 className="text-7xl text-center mb-20 font-semibold tablet:text-5xl tablet:mb-10">
          Razões pelas quais é importante ter um Social Media
        </h3>

        <div className="grid grid-cols-3 gap-x-10 gap-y-10 tablet:grid-cols-2 mobile:grid-cols-1">
          <div>
            <h4 className="text-2xl">Alcance de audiência:</h4>
            <p>
              As redes sociais permitem alcançar uma ampla audiência de maneira
              rápida e eficiente. Milhões de pessoas em todo o mundo estão
              ativas nas redes sociais diariamente, o que oferece uma
              oportunidade única para alcançar um público diversificado.
            </p>
          </div>

          <div>
            <h4 className="text-2xl">Construção de marca:</h4>
            <p>
              As redes sociais são uma plataforma ideal para construir e
              fortalecer a identidade da sua marca. Elas permitem que você
              compartilhe sua história, valores e personalidade com seu
              público-alvo, criando uma conexão emocional e construindo a
              confiança dos consumidores.
            </p>
          </div>

          <div>
            <h4 className="text-2xl">Engajamento com o público:</h4>
            <p>
              As redes sociais oferecem uma maneira direta de interagir e se
              envolver com seu público. Você pode responder a comentários,
              mensagens diretas e mencionar pessoas, demonstrando que você se
              importa com seus seguidores e está disposto a se envolver com
              eles.
            </p>
          </div>

          <div>
            <h4 className="text-2xl">Divulgação de conteúdo:</h4>
            <p>
              As redes sociais são um canal eficaz para compartilhar conteúdo
              relevante e valioso com seu público. Você pode compartilhar
              artigos, vídeos, imagens e outros tipos de conteúdo que sejam
              interessantes para sua audiência, ajudando a construir autoridade
              e educar seu público sobre seu nicho ou setor.
            </p>
          </div>

          <div>
            <h4 className="text-2xl">Monitoramento da concorrência:</h4>
            <p>
              As redes sociais também oferecem a oportunidade de monitorar seus
              concorrentes e que está conectado no seu setor. Você pode
              acompanhar o que seus concorrentes estão fazendo, quais são suas
              estratégias e como estão se envolvendo com o público, obtendo
              informações valiosas para melhorar suas próprias estratégias.
            </p>
          </div>

          <div>
            <h4 className="text-2xl">Promoção de produtos/serviços:</h4>
            <p>
              As redes sociais são um meio eficaz de promover seus produtos ou
              serviços. Você pode criar anúncios direcionados para seu
              público-alvo, compartilhar ofertas, lançar produtos ou
              simplesmente mostrar os benefícios e recursos especiais do que
              você está oferecendo.
            </p>
          </div>
        </div>
      </Section>

      <section
        id="camBackground"
        className="min-h-[100vh] relative flex items-center justify-start px-[3%]"
      >
        <div className="top-20 left-[5%] h-full justify-center backdrop-blur-sm px-8 py-10 rounded-lg max-w-[58%] tablet:max-w-[100%]">
          <h2 className="text-7xl font-semibold mb-2 tablet:text-5xl">
            Tenha o que as empresas precisam
          </h2>

          <ul className="mt-4">
            <li>
              <h3 className="text-2xl font-semibold">
                Postagens comemorativas
              </h3>
              Nossa equipe de designers especializados produzirá postagens
              comemorativas de alta qualidade para potencializar o engajamento
              em suas redes sociais. Com conteúdo personalizado e envolvente,
              nossas postagens serão automaticamente compartilhadas em suas
              redes sociais. Utilizando descrições estratégicas, garantiremos
              que suas postagens causem um impacto maior e gerem interação com
              seu público.
            </li>
            <li className="mt-2">
              <h3 className="text-2xl font-semibold">
                Fotográfos profissionais
              </h3>
              Nossos fotógrafos de alta tecnologia melhoram a qualidade visual
              dos seus produtos/marcas. Capturamos imagens incríveis para um
              perfil profissional e uma aparência de qualidade superior. Com
              fotografias de alto nível, você conquista a atenção do público e
              destaca sua marca. Invista na excelência visual e colha os frutos
              de uma imagem impecável!
            </li>
            <li className="mt-2">
              <h3 className="text-2xl font-semibold">
                Interações com usuários
              </h3>
              Nossa equipe especializada desenvolverá interações significativas
              com seu público-alvo. Cuidaremos de responder, engajar e criar
              relacionamentos com seu público, fortalecendo a presença da sua
              marca nas mídias sociais. Lidaremos com contratos e fechamento de
              serviços, encaminhando diretamente para você. Deixe-nos lidar com
              essa tarefa essencial enquanto você aproveita os benefícios de uma
              comunicação eficaz com seus seguidores.
            </li>
          </ul>
        </div>
      </section>
    </Main>
  );
}
