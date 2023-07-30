import Image from "next/image";
import Empresaria from "./../../img/marketing/empresaria.jpg";
import "./style.css";
import Button from "@/components/global/Button/Button";
import Link from "next/link";

export default function index() {
  return (
    <main>
      <div className="h-[60vh] max-h-[500px] flex items-center justify-center flex-col text-center">
        <h1 className="text-8xl font-semibold">
          Marketing digital
          <br /> para empresas
        </h1>
        <p className="mt-4 text-xl">
          Tenha o que grandes empresas precisam, esteja na frente da
          concorrência!
        </p>
      </div>

      <div className="max-h-[900px] h-[100vh] grid grid-cols-10 gap-x-10 items-center max-w-[80%] m-auto ">
        <div className="col-span-6">
          <h2 className="text-5xl font-semibold bg-clip-text">
            Social media para empresas
          </h2>
          <p className="text-xl">
            As pessoas estão procurando seu produto, mas não estão encontrando,
            atualmente, grande partes das empresas ou possiveis clientes, antes
            de fecharem algum serviço, sempre buscam alguma referencia da
            empresa, principalmente nas redes sociais.
          </p>

          <Link href="/marketing/social-media">
          <Button className="w-full mt-4">CONHECER SOBRE SOCIAL MEDIA</Button>
          </Link>
        </div>

        <div className="col-span-4">
          <div>
            <Image src={Empresaria} alt="empresaria" width={400} />
          </div>
        </div>
      </div>
    </main>
  );
}
