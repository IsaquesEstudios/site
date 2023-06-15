// import Nav from '@/components/global/Nav/Nav'
import Nav from "@/components/global/Nav/Nav";
import "./globals.css";
import Footer from "@/components/global/Footer/Footer";
import Script from "next/script";

// import Loading from './loading'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta
          name="google-site-verification"
          content="M2h9R8mpdIWjAVLPfoTGiyrNS-vS9EKA9AUomMgWjFs"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Script
          // <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TW592H4');`,
          }}
          // />
        />
      </body>
    </html>
  );
}
