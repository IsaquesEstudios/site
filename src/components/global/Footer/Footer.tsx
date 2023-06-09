import LiLink from "../List/LiLink";
import H3 from "../Title/H3";

export default function Footer() {
  return (
    <>
      <div className="h-[0.5px] w-full bg-gradient-to-r from-black-600 via-black-800 to-black-700" />
      <footer className="bg-black-800 py-20 px-[5%] grid grid-cols-6 gap-x-4 tablet:grid-cols-3 mobile:grid-cols-2">
        <div className="col-span-2">
          <h4 className="text-2xl font-semibold">Sobre a Isaques Estúdios</h4>
          <p>
            Somos uma empresa líder em desenvolvimento web, marketing digital e
            social media. Com uma equipe experiente e apaixonada, oferecemos
            soluções personalizadas e inovadoras para impulsionar o sucesso dos
            nossos clientes. Conte conosco para levar sua presença online a
            novos patamares e alcançar resultados surpreendentes.
          </p>
        </div>

        <ul>
          <h3 className="font-semibold text-2xl  mobile:text-xl  mb-1">
            Páginas
          </h3>
          <LiLink href="/">Início</LiLink>
          <LiLink href="/">Contato</LiLink>
        </ul>

        <ul>
          <h3 className="font-semibold text-2xl  mobile:text-xl  mb-1">
            Marketing
          </h3>
          <LiLink href="/campanhas">Campanhas nas redes sociais</LiLink>
        </ul>

        <ul>
          <h3 className="font-semibold text-2xl  mobile:text-xl  mb-1">
            Programação
          </h3>
          <LiLink href="/wordpress">Criação de site em Wordpress</LiLink>
        </ul>

        <ul></ul>

        {/* line two */}

        <ul>
          
        </ul>

      </footer>
    </>
  );
}
