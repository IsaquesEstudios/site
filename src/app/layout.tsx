// import Nav from '@/components/global/Nav/Nav'
import Nav from "@/components/global/Nav/Nav";
import "./globals.css";
import Footer from "@/components/global/Footer/Footer";

// import Loading from './loading'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TW592H4');`,
          }}
        />
        <meta
          name="google-site-verification"
          content="M2h9R8mpdIWjAVLPfoTGiyrNS-vS9EKA9AUomMgWjFs"
        />
        <title>
          Criação de sites e sistemas | Isaques Estúdios
        </title>
        <meta
          name="description"
          content="Nossa agencia de publicidade oferece serviço de criação de sites, sistemas, aplicativos, marketing digital e muito mais, sempre com acessoria completa."
        />

        <link rel="canonical" href="https://isaquesestudios.com"/>
      </head>
      <body>
        {/* <Suspense fallback={<Loading />}> */}
        <Nav />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TW592H4"
            height="0"
            width="0"
          />
        </noscript>
        {children}
        <Footer />
        {/* <Analytics /> */}
        {/* </Suspense> */}
      </body>
    </html>
  );
}
