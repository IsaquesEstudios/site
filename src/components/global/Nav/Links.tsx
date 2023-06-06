import Link from "next/link";
import LinkMenu from "./Link";



export default function Links() {

  return (
    <ul className="list-none flex items-center ">
      <LinkMenu value="Início" href="/" />
      <LinkMenu value="Campanhas" href="/campanhas" />
      <LinkMenu value="Wordpress" href="/wordpress" />
      <LinkMenu value="Contato" href="/contato" />
    </ul>
  )
}