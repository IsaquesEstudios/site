import Link from "next/link";
import LinkMenu from "./Link";



export default function Links() {

  return (
    <ul className="list-none flex items-center mobile:h-screen mobile:flex-col mobile:justify-between mobile:items-start mobile:w-[85%] mobile:max-h-[200px] mobile:mt-20">
      <LinkMenu value="Início" href="/" />
      <LinkMenu value="Tráfego Pago" href="/trafego-pago" />
      <LinkMenu value="Wordpress" href="/wordpress" />
      <LinkMenu value="Contato" href="/contato" />
    </ul>
  )
}