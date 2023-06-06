import H3 from "../Title/H3";

export default function Footer() {
  return (
    <>
      <div className="h-[0.5px] w-full bg-gradient-to-r from-black-600 via-black-800 to-black-700" />
      <footer className="bg-black-800 py-20 px-[5%] grid grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2">
        <ul>
          <H3 className="mb-1">Páginas</H3>
          <li>Início</li>
        </ul>

        <ul>
          <H3 className="mb-1">Marketing</H3>
          <li>Campanhas nas redes sociais</li>
        </ul>

        <ul>
          <H3 className="mb-1">Sites</H3>
          <li>Criação de site em Wordpress</li>
        </ul>
      </footer>
    </>
  );
}
