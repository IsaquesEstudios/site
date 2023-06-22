import Main from "@/components/global/Layout/Main";
import Section from "@/components/global/Layout/Section";

import "./style.css";
import PlayerBackground from "@/components/social-media/PlayerBackground";
import H2 from "@/components/global/Title/H2";
import H3 from "@/components/global/Title/H3";
import Cam from "@/components/global/3d/cam";

export default function Page() {
  return (
    <Main>
      <PlayerBackground />

      <Section className="flex justify-center items-center text-center absolute top-0">
        <div id="content1">
          <h1 className="text-7xl font-semibold">Social Media para empresas</h1>
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

      <Section className="grid grid-cols-2 min-h-[100vh] items-center">
        <div>
          <h2 className="text-7xl font-semibold">
            Pessoas estão te procurando, mas não acham
          </h2>
          <p>
            Pesquisas apontam sobre o número de pessoas que procura saber mais
            pelas redes sociais de clientes, antes de fechar um serviço, tem
            crescido e tende a crescer muito mais nos próximos anos
          </p>
        </div>
      </Section>

      <Section className="min-h-[100vh] flex items-center justify-center flex-col">
        <h3 className="text-7xl text-center mb-20 font-semibold">
          Razões pelas quais é importante ter um Social Media
        </h3>

        <div className="grid grid-cols-3 gap-x-10 gap-y-10">
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

      <section className="min-h-[100vh] relative grid grid-cols-2">
        <div className="top-20 left-[5%] max-w-[50%] h-full flex flex-col justify-center">
          <h2 className="text-7xl font-semibold mb-2">
            Tenha o que grandes empresas precisam
          </h2>
          <h3 className="text-xl font-light">
            Conheça os diferencias de contratar o serviço de social media pela
            agencia da isaques estúdios:
          </h3>

          <ul className="list-disc mt-4 ml-5">
            <li>
              Potencialize o engajamento nas suas redes sociais com postagens
              comemorativas de alta qualidade, criadas por um designer
              especializado. Nossa equipe de designers irá produzir conteúdo
              personalizado e envolvente, cuidando para que seja automaticamente
              compartilhado em suas redes sociais. Com descrições estratégicas,
              iremos garantir que suas postagens gerem um maior impacto e
              interação com seu público. Deixe-nos lidar com a parte criativa
              enquanto você desfruta dos resultados de uma presença online
              dinâmica e cativante!
            </li>
            <li className="mt-2">
              Com nossos fotográfos equipado com o que há de melhor em
              tecnologia, eleve a qualidade visual dos seus produtos/marcas.
              Nossa equipe irá capturar imagens incríveis, resultando em um
              perfil mais profissional e transmitindo uma aparência de qualidade
              superior aos seus serviços. Com fotografias de alto nível, você
              conquistará a atenção do público e destacará sua marca no mercado.
              Invista na excelência visual e colha os frutos de uma imagem
              impecável!
            </li>
            <li className="mt-2">
              Desenvolveremos uma interação significativa com seu público-alvo,
              deixando nossos funcionários especializados cuidarem disso para
              você. Reconhecemos a importância dessa interação para o sucesso
              das suas redes sociais. Nossa equipe estará pronta para responder,
              engajar e criar relacionamentos com seu público, gerando maior
              envolvimento e fortalecendo a presença da sua marca nas mídias
              sociais, Qualquer tipo de contrato ou fechaamento de serviço, será
              levado direto para você Deixe-nos lidar com essa tarefa essencial,
              enquanto você desfruta dos benefícios de uma comunicação eficaz
              com seus seguidores.
            </li>
          </ul>
        </div>
      </section>
    </Main>
  );
}
