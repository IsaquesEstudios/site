import { Metadata } from "next";
import MainPage from "@/content/main";

export const metadata: Metadata = {
  title: "Agencia de Publicidade para expandir o marketing da sua Empresa",
  description:
    "Nossa agencia de publicidade oferece serviço de criação de sites, sistemas, aplicativos, marketing digital tudo que sua empresa precisa para crescer",
  keywords: "agencia,publicidade,marketing,sites",
  alternates: {
    languages: {
      "pt-BR": "/",
    },
    canonical: "/",
  },
  openGraph: {
    title: "Agencia de Publicidade para expandir o marketing da sua Empresa",
    description:
      "Nossa agencia de publicidade oferece serviço de criação de sites, sistemas, aplicativos, marketing digital tudo que sua empresa precisa para crescer",
    locale: "pt-BR",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <MainPage />
    </>
  );
}
