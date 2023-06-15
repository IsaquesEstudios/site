import Nav from "@/components/global/Nav/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Sites em wordpress - Tenha seu site pronto em wordpress para sua empresa</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org/",
            "@type": "Recipe",
            "name": "Da Roça Biscoitos",
            "image": [
            "https://example.com/photos/1x1/photo.jpg",
            "https://example.com/photos/4x3/photo.jpg",
            "https://imgur.com/a/Ga5S7Y0"
            ],
            "author": {
              "@type": "Da Roça Biscoitos",
              "name": "Site em wordpress"
            },
          }
          </script>
          `,
          }}
        ></script>
        <meta
          name="description"
          content="Sites em wordpress, landing pages, e-commerce, blog e muito mais, profissionais em wordpress estão prontos para apresentar os valores"
        />

        <link rel="canonical" href="https://isaquesestudios.com/wordpress" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
