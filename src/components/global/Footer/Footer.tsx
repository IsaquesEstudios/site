import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import LiLink from "../List/LiLink";
import H3 from "../Title/H3";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TfiMapAlt } from "react-icons/tfi";
import Benefits from "../Topics/Benefits";

export default function Footer() {
  return (
    <>
      <div className="h-[0.5px] w-full bg-gradient-to-r from-black-600 via-black-800 to-black-700"></div>
      <footer className="bg-black-800 py-20 px-[5%] grid grid-cols-6 gap-x-4 tablet:grid-cols-3 mobile:grid-cols-2 mobile:pt-10 mobile:gap-y-4">
        <div className="col-span-2">
          <h3 className="text-2xl">Sobre a Isaques Estúdios</h3>
          <p>
            Somos uma empresa líder em desenvolvimento web, marketing digital e
            social media. Com uma equipe experiente e apaixonada, oferecemos
            soluções personalizadas e inovadoras para impulsionar o sucesso dos
            nossos clientes. Conte conosco para levar sua presença online a
            novos patamares e alcançar resultados surpreendentes.
          </p>
        </div>

        <div>
          <h4 className="text-2xl mobile:text-xl  mb-1">Páginas</h4>
          <ul>
            <LiLink href="/">Início</LiLink>
            <LiLink href="/">Contato</LiLink>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl  mobile:text-xl  mb-1">Marketing</h4>
          <ul>
            <LiLink href="/trafego-pago">Tráfego Pago</LiLink>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl  mobile:text-xl  mb-1">Programação</h4>
          <ul>
            <LiLink href="/wordpress">Criação de site em Wordpress</LiLink>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl  mobile:text-xl  mb-1">Outros</h4>
          <ul>
            <LiLink href="/wordpress">Termos de uso</LiLink>
            <LiLink href="/wordpress">Política de privacidade</LiLink>
          </ul>
        </div>

        {/* line two */}

        <div className="col-span-2">
          <h5 className="mb-2 mt-4 text-2xl">Redes Sociais</h5>

          <div className="flex gap-2">
            <Link
              href="https://www.facebook.com/IsaquesEstudios/"
              aria-label="página no facebook da isaques estúdios"
            >
              <AiOutlineFacebook size={30} />
            </Link>

            <Link
              href="https://www.instagram.com/isaquesestudios/"
              aria-label="perfil no instagram da isaques estúdios"
            >
              <AiOutlineInstagram size={32} />
            </Link>

            <Link
              href="https://www.youtube.com/channel/UCuFoIhfVe3HiDgC72ITLDNQ"
              aria-label="perfil no youtube da isaques estúdios"
            >
              <AiOutlineYoutube size={34} />
            </Link>
          </div>

          <h5 className="mt-4 text-2xl">Contato</h5>

          <div className="flex items-center mt-2">
            <BsTelephone className="mr-1" />
            +55 1193840-4368
          </div>

          <div className="flex items-center mt-2 w-full">
            <FiMail className="mr-1" />
            contato@isaquesestudios.com
          </div>

          <Benefits
            className="mt-2"
            key={1}
            description={[
              "whatsapp: (11) 98340-4368",
              "email: matteus@isaquesestudios.com",
            ]}
          />
          <Benefits
            className="mt-1"
            key={1}
            description={[
              "whatsapp: (11) 98287-3694",
              "email: ezequiel@isaquesestudios.com",
            ]}
          />
          <Benefits
            className="mt-1"
            key={1}
            description={[
              "whatsapp: (11) 97791-9130",
              "email: abraao@isaquesestudios.com",
            ]}
          />

          <div className="flex items-center mt-2">
            <TfiMapAlt color="white" className="mr-1 " />
            São Paulo - SP
          </div>
        </div>
      </footer>
      <div className="text-center text-xs border-t border-black-600 pt-4 pb-4">
        <p>Todosa os direitos reservados a Isaques Estúdios</p>
        <p>
          <Link href="/politica-de-privacidade">Politica de privacidade</Link> &{" "}
          <Link href="/termos-de-uso">termos de uso</Link>
        </p>
      </div>
    </>
  );
}
