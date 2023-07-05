import Cam from "@/components/global/3d/cam";
import Button from "@/components/global/Button/Button";
import Main from "@/components/global/Layout/Main";
import { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata = {
  title: "Criação de identidade visual - Criação de marca, identidade visual e logos",
  description:"Criação de marca, logotipo e identidade visual, contrua a marca da sua empresa, destaque-se no mercado!",
  keywords: "logo, empresa, identidade, visual, marca",
  alternates: {
    languages: {
      "pt-BR": "https://isaquesestudios.com/criacao-de-identidade-visual",
    },
    canonical: "https://isaquesestudios.com/criacao-de-identidade-visual",
  },
} 

export default function page() {
  return (
    <Main>
      <section className="grid grid-cols-2 items-center min-h-screen h-full max-w-[90%] m-auto">
        <div className="">
          <h1 className="text-7xl font-semibold">
            Criação de Identidade Visual
          </h1>
          <p>
            A criação de identidade visual é um dos maiores pontos necessários
            para marcas e empresas, pois tem o poder de marcar o seu publico,
            com cores e imagens que chamem a atenção dos que visualizam. Ela
            também diferencia a marca da concorrência, transmitindo seus valores
            e personalidade de forma visualmente impactante. Uma identidade
            visual bem trabalhada transmite profissionalismo, credibilidade e
            confiança, enquanto facilita a comunicação da marca e a criar uma
            conexão com seu público-alvo.
          </p>
          <Button className="w-full mt-4">Falar com atendente</Button>
        </div>

        <div></div>
      </section>

      <section className="max-w-[90%] m-auto py-40">
        <h2 className="text-center font-semibold text-7xl">
          Processo para criação de
          <br /> identidade visual
        </h2>

        <div className="grid grid-cols-3 gap-x-10 mt-10">
          <div>
            <h3 className="text-3xl font-medium">Logotipo</h3>
            <p>
              O logotipo é um dos elementos mais importantes da identidade
              visual. Ele consiste em um símbolo gráfico ou marca que representa
              a imagem da empresa. O logotipo deve ser única e refletir a
              personalidade e os valores da marca. É o principal elemento de
              identificação visual da marca, por isso, precisa ser feita por um
              profissional.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-medium">Cores</h3>
            <p>
              As cores desempenham um papel crucial na identidade visual, pois
              têm o poder de evocar emoções e transmitir mensagens. A escolha
              das cores deve ser estratégica e alinhada com a personalidade da
              marca e com o público-alvo. As cores escolhidas devem ser
              utilizadas de forma consistente em todos os elementos visuais,
              transmitindo uma imagem coesa e reconhecível.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-medium">Tipografia</h3>
            <p>
              A tipografia é à escolha e uso das fontes de texto na identidade
              visual. A escolha adequada da tipografia ajuda a transmitir a
              personalidade da marca, seja ela moderna, clássica, elegante ou
              descontraída. É importante selecionar uma ou mais fontes que sejam
              legíveis e adequadas para diversos materiais de comunicação, desde
              o logotipo até os materiais impressos e digitais.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 items-center min-h-screen h-full max-w-[90%] m-auto">
        <div>
          <h4 className="text-7xl font-semibold">
            Identidade visual
            <br /> para empresas
          </h4>
          <p className="mt-2">
            Diversas empresas no Brasil tem confiado na isaques estúdios, temos
            criado e encaminhado várias empresas no atual mercado, criando suas
            identidades visuais e gerenciando não somente essa parte, mas também
            cuidando de <Link href="/social-media">redes sociais</Link> e{" "}
            <Link href="/wordpress">web sites</Link>, mas independente do
            momento que sua empresa esteja, tudo começa na identidade visual
            certa.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center flex-col min-h-screen h-full">
        <h5 className="text-7xl font-semibold text-center ">
          Quem confia, aprova!
        </h5>
      </section>
    </Main>
  );
}
