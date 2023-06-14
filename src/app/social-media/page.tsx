import Main from "@/components/global/Layout/Main";
import Section from "@/components/global/Layout/Section";

import "./style.css";
import PlayerBackground from "@/components/social-media/PlayerBackground";
import H2 from "@/components/global/Title/H2";

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

      <Section className="grid-cols-2 min-h-[100vh] items-center">
        <div>
          <H2>
            Neste momento, alguem está procurando seu perfil, e não está
            encontrando.
          </H2>
          <p>
            Pesquisas apontam sobre o número de pessoas que procura saber mais
            pelas redes sociais de clientes, antes de fechar um serviço, tem
            crescido e tende a crescer muito mais nos próximos anos
          </p>
        </div>
      </Section>
    </Main>
  );
}
