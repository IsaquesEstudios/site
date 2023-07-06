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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
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
        <meta name="p:domain_verify" content="a479840afb20c5f47c22bcb6ce8b718f"/>
      </head>
      <body>
        <noscript>
        </noscript>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
