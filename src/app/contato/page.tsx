import Button from "@/components/global/Button/Button";
import Input from "@/components/global/Input/Input";
import Main from "@/components/global/Layout/Main";
import H3 from "@/components/global/Title/H3";
import Benefits from "@/components/global/Topics/Benefits";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <head>
        <title>Contato - Isaques Estúdios</title>
        <meta
          name="description"
          content="Fale conosco isaques estúdios, contato com equipe profissional"
        />

        <link rel="canonical" href="https://isaquesestudios.com/contato" />
      </head>

      <Main>
        <div className="pt-[150px] px-[5%] grid grid-cols-2 mobile:grid-cols-1 mobile:pt-[125px]">
          <div className="flex items-start flex-col justify-start">
            <h1 className="text-2xl">Contato Isaques Estúdios</h1>

            <Benefits
              className="mt-8"
              key={1}
              title="Matteus Isaque"
              description={[
                "whatsapp: (11) 98340-4368",
                "email: matteus@isaquesestudios.com",
              ]}
            />
            <Benefits
              className="mt-4"
              key={1}
              title="Ezequiel Isaque"
              description={[
                "whatsapp: (11) 98287-3694",
                "email: ezequiel@isaquesestudios.com",
              ]}
            />
            <Benefits
              className="mt-4"
              key={1}
              title="Abraão Isaque"
              description={[
                "whatsapp: (11) 97791-9130",
                "email: abraao@isaquesestudios.com",
              ]}
            />

            <div className="mt-4">
              <H3>Instagram</H3>
              <Link href="https://www.instagram.com/isaquesestudios/">
                <p>@Isaquesestudios</p>
              </Link>
            </div>
            <div className="mt-4">
              <H3>Youtube</H3>
              <Link href="https://www.youtube.com/@isaquesestudios994/featured">
                <p>Isaques Estúdios</p>
              </Link>
            </div>
          </div>

          <form className="mobile:my-[75px]">
            <Input
              className="w-full"
              required={true}
              type="text"
              placeholder="Nome"
            />
            <Input
              className="w-full mt-4"
              type="text"
              required={true}
              placeholder="Numero"
            />
            <Input
              className="w-full mt-4"
              type="text"
              required={true}
              placeholder="Email"
            />
            <p className=" mt-4">Por onde devemos te responder?</p>
            <select
              name="select"
              id="select"
              className="text-black-700 w-full mt-4 rounded-md p-2 ring-yellow-500 focus:outline-none focus:ring-2 focus:bg-black-50"
            >
              <option value="whatsapp" className="text-black-300">
                Whatsapp
              </option>
              <option value="ligação" className="text-black-300">
                Ligação
              </option>
              <option value="Email" className="text-black-300">
                Email
              </option>
            </select>
            <textarea
              placeholder="mensagem"
              className="h-[150px] text-black-700 mt-4 rounded-md w-full p-2 ring-yellow-500 focus:outline-none focus:ring-2 focus:bg-black-50"
            />
            <div>
              <input type="checkbox" className="mr-2" required />
              <label>
                Eu aceito receber informações e promoções nos dados que estou
                fornecendo e aceito todas as políticas de privacidades e termo
                de uso deste site.
              </label>
            </div>
            <Button className="w-full mt-4">Enviar mensagem</Button>
          </form>
        </div>
      </Main>
    </>
  );
}
