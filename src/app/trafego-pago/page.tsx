import CampaignsPage from "@/content/tráfegoPago";
import { Metadata } from "next";
import Head from "next/head";

<Head>
  <title>
    Campanhas de marketing na internet - Aumente o numero de clientes
  </title>
  <meta
    name="description"
    content="Campanhas online no google, facebook, youtube, instagram, tenha seu site sempre no topo, atraindo mais clientes para sua empresa."
  />

  <link rel="canonical" href="" />
</Head>;

export const metadata: Metadata = {
  title:
    "Campanhas de marketing na internet - Facebook e google Ads para sua empresa",
  description:
    "Campanhas de marketing nas redes de pesquisa do google e em todas as redes sociais, atraia mais clientes para sua empresa",
  keywords: "agencia,publicidade,marketing,sites",
  alternates: {
    languages: {
      "pt-BR": "https://isaquesestudios.com/campanhas",
    },
    canonical: "https://isaquesestudios.com/campanhas",
  },
  openGraph: {
    title:
      "Campanhas de marketing na internet - Facebook e google Ads para sua empresa",
    description:
      "Campanhas de marketing nas redes de pesquisa do google e em todas as redes sociais, atraia mais clientes para sua empresa",
    locale: "pt-BR",
    type: "website",
  },
};

export default function SocialMedia() {
  return (
    <>
      <CampaignsPage />
    </>
  );
}
