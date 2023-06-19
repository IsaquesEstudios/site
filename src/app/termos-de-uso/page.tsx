import Main from "@/components/global/Layout/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de uso para serviços da Isaques Estúdios",
  description: "Nossos termos de uso ao acessar nossa plataforma",
  keywords: "Política, privacidade, segurança",
  alternates: {
    languages: {
      "pt-BR": "https://isaquesestudios.com/termos-de-uso",
    },
    canonical: "https://isaquesestudios.com/termos-de-uso",
  },
  openGraph: {
    title: "Termos de uso para serviços da Isaques Estúdios",
    description: "Nossos termos de uso ao acessar nossa plataforma",
    locale: "pt-BR",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Main className="max-w-[90%] m-auto">
        <h1 className="text-7xl mt-14 font-semibold mobile:text-5xl">
          Termos de uso Isaques Estúdios
        </h1>

        <p className="mb-10 mt-2">
          Este Termo de Uso ("Termo") estabelece os termos e condições para o
          uso dos serviços oferecidos pela [Nome da Empresa de Marketing e
          Criação de Site] ("Empresa"), bem como do website, aplicativos móveis,
          ferramentas e demais recursos disponibilizados pela Empresa
          ("Plataforma"). Ao utilizar nossos serviços e acessar nossa
          Plataforma, você concorda com os termos e condições estabelecidos
          neste Termo. Caso não concorde com estes termos, por favor, não
          utilize nossos serviços ou acesse nossa Plataforma.
        </p>

        <div className="mb-10">
          <h2 className="text-3xl mt-10 font-semibold">Serviços</h2>

          <p className="mb-4">
            1.1. A Empresa oferece serviços de marketing e criação de sites,
            incluindo, mas não se limitando a, planejamento estratégico,
            desenvolvimento de sites, otimização para motores de busca (SEO),
            gestão de mídias sociais, criação de conteúdo, design gráfico,
            consultoria em marketing digital, entre outros ("Serviços").
          </p>

          <p className="mb-4">
            1.2. Ao contratar nossos Serviços, você concorda em fornecer
            informações precisas, atualizadas e completas, sendo responsável
            pela veracidade dos dados fornecidos. A Empresa não se
            responsabiliza por informações imprecisas ou incompletas fornecidas
            pelo cliente.
          </p>

          <p className="mb-4">
            1.3. O cliente é responsável pelo conteúdo fornecido à Empresa,
            incluindo textos, imagens, vídeos, logotipos, marcas registradas e
            outros elementos de propriedade intelectual. A Empresa não se
            responsabiliza por violações de direitos autorais ou uso indevido de
            material protegido por terceiros fornecido pelo cliente.
          </p>
        </div>

        <div>
          <h2 className="text-3xl mt-10 font-semibold">Propriedade Intelectual</h2>

          <p className="mb-4">
            2.1. Todo o conteúdo disponibilizado pela Empresa em sua Plataforma,
            incluindo textos, imagens, logotipos, marcas registradas, design,
            software e demais elementos, é de propriedade exclusiva da Empresa
            ou de seus parceiros comerciais, estando protegido por leis de
            direitos autorais e propriedade intelectual.
          </p>

          <p className="mb-4">
            2.2. Ao utilizar nossos Serviços, você concorda em respeitar os
            direitos de propriedade intelectual da Empresa e de terceiros. É
            proibido copiar, reproduzir, modificar, distribuir, transmitir,
            exibir, vender, licenciar ou explorar qualquer conteúdo da
            Plataforma sem autorização prévia por escrito da Empresa.
          </p>
        </div>

        <div>
          <h3 className="text-3xl mt-10 font-semibold">Privacidade</h3>

          <p className="mb-4">
            3.1. A privacidade dos usuários é importante para a Empresa. Ao
            utilizar nossos Serviços, você concorda com a coleta, uso,
            armazenamento e divulgação de suas informações pessoais conforme
            descrito em nossa Política de Privacidade, disponível em [inserir
            link para a política de privacidade].
          </p>

          <p className="mb-4">
            3.2. A Empresa se compromete a adotar medidas de segurança adequadas
            para proteger as informações dos usuários. No entanto, devido à
            natureza da internet, não podemos garantir a segurança absoluta das
            informações transmitidas ou armazenadas eletronicamente. O uso da
            Plataforma e a divulgação de informações pessoais são de sua
            responsabilidade.
          </p>
        </div>

        <div>
          <h4 className="text-3xl mt-10 font-semibold">Responsabilidades</h4>

          <p className="mb-4">
            4.1. A Empresa se compromete a prestar os Serviços de forma
            diligente e profissional, utilizando recursos adequados e seguindo
            as melhores práticas do mercado.
          </p>

          <p className="mb-4">
            4.2. O cliente reconhece que os resultados obtidos por meio dos
            Serviços podem variar de acordo com diversos fatores, incluindo, mas
            não se limitando a, estratégia de marketing, concorrência,
            mercado-alvo, entre outros. A Empresa não garante resultados
            específicos, financeiros ou de outra natureza, decorrentes da
            utilização dos Serviços.
          </p>

          <p className="mb-4">
            4.3. A Empresa não se responsabiliza por danos diretos, indiretos,
            incidentais, consequenciais ou punitivos decorrentes do uso dos
            Serviços, incluindo, mas não se limitando a, perda de dados,
            interrupção de negócios, lucros cessantes ou danos à reputação.
          </p>
        </div>

        <div>
          <h5 className="text-3xl mt-10 font-semibold">Cancelamento e Rescisão</h5>

          <p className="mb-4">
            5.1. O cliente pode cancelar a contratação dos Serviços a qualquer
            momento, mediante aviso prévio por escrito à Empresa.
          </p>

          <p className="mb-4">
            5.2. A Empresa reserva-se o direito de rescindir ou suspender os
            Serviços, total ou parcialmente, a seu critério, caso o cliente
            viole os termos deste Termo, utilize os Serviços para fins ilegais,
            prejudique a reputação da Empresa ou de terceiros, ou por qualquer
            motivo justificável.
          </p>
        </div>

        <div>
          <h6 className="text-3xl mt-10 font-semibold">Disposições Gerais</h6>

          <p className="mb-4">
            6.1. Este Termo constitui o acordo integral entre a Empresa e o
            cliente, substituindo qualquer acordo ou entendimento anterior
            relacionado aos Serviços.
          </p>

          <p className="mb-4">
            6.2. A Empresa pode atualizar ou modificar este Termo a qualquer
            momento, mediante aviso prévio aos usuários. O uso continuado dos
            Serviços após a atualização do Termo constitui aceitação das
            modificações.
          </p>

          <p className="mb-4">
            6.3. Caso qualquer disposição deste Termo seja considerada inválida
            ou inexequível, as demais disposições permanecerão em pleno vigor e
            efeito.
          </p>

          <p className="mb-4">
            6.4. Este Termo será regido e interpretado de acordo com as leis do
            [país], ficando eleito o foro da comarca de [local] para dirimir
            quaisquer litígios decorrentes deste Termo.
          </p>

          <p className="mb-4">
            Ao utilizar nossos Serviços e acessar nossa Plataforma, você declara
            ter lido, compreendido e concordado com os termos e condições deste
            Termo de Uso.
          </p>
        </div>
      </Main>
    </>
  );
}
